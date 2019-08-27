import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Regra } from '../../../modelos/regra';
import { RegrasService } from '../regras.service';
import { MensagensService } from '../../../servicos/mensagens.service';

@Component({
  selector: 'app-pagina-regras',
  templateUrl: './pagina-regras.component.html',
  styleUrls: ['./pagina-regras.component.css']
})
export class PaginaRegrasComponent implements OnInit {

  public regras = new Array<Regra>();

  constructor(public titulo: Title, public regrasService: RegrasService, public mensagensService: MensagensService) {
    this.titulo.setTitle('Regras de Pontuação');
   }

  ngOnInit() {
   this.carregarRegras();
  }

  public carregarRegras(): void {
    this.regrasService.buscarRegras().subscribe(response => this.regras = response);
  }

  public excluirRegra(id: number) {
    this.regrasService.removerRegra(id).subscribe(() => {
      this.mensagensService.exibirMensagem('Regra excluída com sucesso!');
      this.carregarRegras;
    }, () => this.mensagensService.exibirMensagem('Erro ao excluír regra!'))
  }

}
