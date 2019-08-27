import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { VsmNavbarService } from '../../../componentes/vsm-navbar/servicos/vsm-navbar.service';
import { Title } from '@angular/platform-browser';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../../../modelos/cliente';
import { Paginacao } from '../../../modelos/paginacao';
import { Table } from 'primeng/table';
import { Estado } from '../../../modelos/estado';
import { Cidade } from '../../../modelos/cidade';
import { MensagensService } from '../../../servicos/mensagens.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegrasService } from '../../regras/regras.service';

@Component({
  selector: 'app-pagina-clientes',
  templateUrl: './pagina-clientes.component.html',
  styleUrls: ['./pagina-clientes.component.css']
})
/**
 * @author Gabriel Alan
 * @description Classe de componente da Página Principal de Clientes.
 */
export class PaginaClientesComponent implements OnInit {
  /**
   * @description Objeto de Paginação com todos os dados dos Clientes.
   */
  public conteudoTabela = new Paginacao<Cliente[]>();

  /**
   * @description Controlador do dialog de Cadastro de Clientes.
   */
  public dialogCriacao: boolean;

  /**
   * @description Controlador do dialog de Alteração e visualização de Clientes.
   */
  public dialogAlteracao: boolean;

  /**
   * @description Objeto do tipo any, utilizado apenas para a caixa de seleção de sexo.
   */
  public opcoesSexo = [
    { value: 'M', viewValue: 'Masculino' },
    { value: 'F', viewValue: 'Feminino' }
  ];

  /**
   * @description Array utilizado para armazenar os estados para caixa de seleção.
   */
  public estados: Estado[] = [];

  /**
   * @description Array utilizado para armazenar as cidades de um estado para a caixa de seleção.
   */
  public cidades: Cidade[] = [];
  public clienteCarregado = new Cliente();

  constructor(
    private title: Title,
    private clientesService: ClientesService,
    private mensagensService: MensagensService,
    private router: Router
  ) {
    this.title.setTitle('Gestão de Clientes');
  }

  /**
   * @description No ngOnInit são executadas 3 rotinas:
   *  1) Troca de estado de navbar;
   *  2) Busca de todos os clientes cadastrados;
   *  3) Busca de todos os estados para cadastro;
   * Por não sofrerem de problemas de assíncronismo, estão declaradas uma sobre outra e não aninhadas.
   */
  ngOnInit() {
    VsmNavbarService.trocaDeEstado.emit(2);
    this.clientesService
      .buscarClientes()
      .subscribe(response => (this.conteudoTabela = response));
    this.clientesService
      .buscarEstados()
      .subscribe(response => (this.estados = response));
  }

  /**
   * @description Método que tem como função buscar as cidade através da sigla de um estado;
   */
  public buscarCidades(sigla: string): void {
    this.clientesService
      .buscarCidades(sigla)
      .subscribe(response => (this.cidades = response));
  }

  /**
   * @description Método que tem como função direcionar a tela para a página de atualização de usuário
   *  passando como parâmetro de rota o id do usuário;
   * @param idUsuario
   */
  public buscarCliente(idUsuario: string): void {
    this.router.navigate(['/clientes/atualizacao/' + idUsuario]);
  }

  /**
   * @description Método que tem como função direcionar a tela para a página de vendas
   *  passando como parâmetro de rota o id do usuário;
   * @param idUsuario
   */
  public registrarVenda(idUsuario: string):void {
    this.router.navigate(['/clientes/' + idUsuario + '/venda']);
  }

  /**
   * @description Método que tem como função agrupar/estruturar os dados e 
   *  efetivar o cadastro do novo cliente,
   *  
   * @param formulario Objeto do Formulário
   */
  public cadastrar(formulario: FormGroup): void {
    const cliente = this.construirObjetoDeCliente(formulario.value);
    this.clientesService.cadastrarCliente(cliente).subscribe(() => {
      this.dialogCriacao = false;
      this.mensagensService.exibirMensagem(
        'Cliente ' + cliente.nome + ' cadastrado com sucesso!'
      );
      formulario.reset();
      this.clientesService
        .buscarClientes()
        .subscribe(response => (this.conteudoTabela = response));
    });
  }

  /**
   * @description Método que tem como função agrupar os dados de uma fonte sem definição (any)
   *  e contruir um objeto de cliente.
   */
  private construirObjetoDeCliente(dados: any): Cliente {
    const cliente = new Cliente();
    cliente.nome = dados.nome;
    cliente.sexo = dados.sexo;
    cliente.idade = dados.idade;
    cliente.email = dados.email;
    cliente.telefone = dados.telefone;
    cliente.endereco.estado = dados.estado;
    cliente.endereco.cidade = dados.cidade;
    cliente.endereco.bairro = dados.bairro;
    cliente.endereco.rua = dados.rua;
    cliente.endereco.numero = dados.numero;
    cliente.endereco.complemento = dados.complemento;
    cliente.pontuacao = 0;
    return cliente;
  }
}
