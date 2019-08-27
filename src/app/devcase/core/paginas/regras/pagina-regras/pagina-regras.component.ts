import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Regra } from '../../../modelos/regra';
import { RegrasService } from '../regras.service';
import { MensagensService } from '../../../servicos/mensagens.service';
import { VsmNavbarService } from '../../../componentes/vsm-navbar/servicos/vsm-navbar.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagina-regras',
  templateUrl: './pagina-regras.component.html',
  styleUrls: ['./pagina-regras.component.css']
})
/**
 * Classe de Componente da Página de Regras
 */
export class PaginaRegrasComponent implements OnInit {
  /**
   * @description Array de Regras que tem como função armazenar todas as regras cadastradas na aplicação.
   */
  public regras = new Array<Regra>();

  /**
   * @description Controlador do dialog de Criação de Regra.
   */
  public dialogCriacaoRegra: boolean;

  /**
   * @description Variável que tem como função armazenar o valor mínimo permitido para a criação de uma nova Regra.
   */
  public valorMinimo: number;

  constructor(
    public titulo: Title,
    public regrasService: RegrasService,
    public mensagensService: MensagensService
  ) {
    this.titulo.setTitle('Regras de Pontuação');
  }

  /**
   * @description No ngOnInit são executadas 2 rotinas:
   *  1) Chamada de Carregamento de Regras;
   *  2) Emissão de Evento para troca de estado de Navbar.
   */
  ngOnInit() {
    this.carregarRegras();
    VsmNavbarService.trocaDeEstado.emit(2);
  }

  /**
   * @description Método que tem como função carregar as regras cadastradas na aplicacao.
   */
  public carregarRegras(): void {
    this.regrasService.buscarRegras().subscribe(response => {
      this.regras = response;
      this.regrasService.buscarValorMinimo().subscribe(response => {
        this.valorMinimo = response.valorMinimo;
      });
    });
  }

  /**
   * @description Método que tem como função agrupar/estruturar os dados para a criação de uma nova regra.
   */
  public criarRegra(formulario: FormGroup): void {
    const valorEscolhido = formulario.value.maximo;
    const pontos = formulario.value.pontos;
    this.regrasService.adicionarRegra(valorEscolhido, pontos).subscribe(
      () => {
        this.mensagensService.exibirMensagem('Regra adicionada com sucesso!');
        this.dialogCriacaoRegra = false;
        this.carregarRegras();
        formulario.reset();
      },
      () => this.mensagensService.exibirMensagem('Erro ao cadastrar regra!')
    );
  }

  /**
   * @deprecated Método que tem como função excluir uma regra através de seu código.
   * @param id Código da Regra
   */
  public excluirRegra(id: number) {
    this.regrasService.removerRegra(id).subscribe(
      () => {
        this.mensagensService.exibirMensagem('Regra excluída com sucesso!');
        this.carregarRegras();
      },
      () => this.mensagensService.exibirMensagem('Erro ao excluír regra!')
    );
  }
}
