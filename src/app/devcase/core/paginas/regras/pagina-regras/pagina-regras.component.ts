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
export class PaginaRegrasComponent implements OnInit {

  public regras = new Array<Regra>();
  public dialogCriacaoRegra: boolean;
  public valorMinimo: number;

  constructor(public titulo: Title, public regrasService: RegrasService, public mensagensService: MensagensService) {
    this.titulo.setTitle('Regras de Pontuação');
   }

  ngOnInit() {
   this.carregarRegras();
   VsmNavbarService.trocaDeEstado.emit(2);
  }

  public carregarRegras(): void {
    this.regrasService.buscarRegras().subscribe(response => {
      this.regras = response;
      this.regrasService.buscarValorMinimo().subscribe(response => {
        this.valorMinimo = response.valorMinimo;
      })
    });
  }

 
  public criarRegra(formulario: FormGroup): void{
    const valorEscolhido = formulario.value.maximo;
    const pontos = formulario.value.pontos;
    this.regrasService.adicionarRegra(valorEscolhido,pontos).subscribe(() => {
      this.mensagensService.exibirMensagem('Regra adicionada com sucesso!');
      this.dialogCriacaoRegra = false;
      this.carregarRegras();
      formulario.reset();
    }, () => this.mensagensService.exibirMensagem('Erro ao cadastrar regra!'));
  }

  public excluirRegra(id: number) {
    this.regrasService.removerRegra(id).subscribe(() => {
      this.mensagensService.exibirMensagem('Regra excluída com sucesso!');
      this.carregarRegras();
    }, () => this.mensagensService.exibirMensagem('Erro ao excluír regra!'))
  }

}

