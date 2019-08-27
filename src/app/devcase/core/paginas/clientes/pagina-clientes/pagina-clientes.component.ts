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

@Component({
  selector: 'app-pagina-clientes',
  templateUrl: './pagina-clientes.component.html',
  styleUrls: ['./pagina-clientes.component.css']
})
export class PaginaClientesComponent implements OnInit {
  public conteudoTabela = new Paginacao<Cliente[]>();
  public dialogCriacao: boolean;
  public dialogAlteracao: boolean;
  public dialogConfirmacao: boolean;
  public opcoesSexo = [
    { value: 'M', viewValue: 'Masculino' },
    { value: 'F', viewValue: 'Feminino' }
  ];
  public estados: Estado[] = [];
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

  ngOnInit() {
    VsmNavbarService.trocaDeEstado.emit(2);
    this.clientesService
      .buscarClientes()
      .subscribe(response => (this.conteudoTabela = response));
    this.clientesService
      .buscarEstados()
      .subscribe(response => (this.estados = response));
  }

  public buscarCidades(id: string) {
    this.clientesService
      .buscarCidades(id)
      .subscribe(response => (this.cidades = response));
  }

  public buscarCliente(id: string) {
    this.router.navigate(['/clientes/atualizacao/' + id]);
  }

  public registrarVenda(id: string){
    this.router.navigate(['/clientes/' + id + '/venda']);
  }

  public cadastrar(dados: any, formulario: FormGroup) {
    const cliente = this.construirObjetoDeCliente(dados);
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

  public atualizarCliente(cliente: Cliente): void {    
    this.clientesService.atualizarCliente(cliente).subscribe(
      () => {
        this.mensagensService.exibirMensagem('Cliente atualizado com sucesso!');

        this.clientesService.buscarClientes().subscribe(response => {
          this.conteudoTabela = response;
          this.clienteCarregado = null;
          this.dialogAlteracao = false;
        });
      },
      () => this.mensagensService.exibirMensagem('Erro ao atualizar Cliente!')
    );
  }

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
