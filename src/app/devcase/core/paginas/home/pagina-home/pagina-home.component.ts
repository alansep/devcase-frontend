import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/devcase/core/autenticacao/autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { VsmNavbarService } from 'src/app/devcase/core/componentes/vsm-navbar/servicos/vsm-navbar.service';

@Component({
  selector: 'app-pagina-home',
  templateUrl: './pagina-home.component.html',
  styleUrls: ['./pagina-home.component.css']
})
/**
 * @author Gabriel Alan
 * @description Classe de Componente da Página Home
 */
export class PaginaHomeComponent implements OnInit {
  constructor(private title: Title) {
    this.title.setTitle('Início');
  }

  /**
   * @description No ngOnInit um evento de troca de navbar é emitido.
   */
  ngOnInit() {
    VsmNavbarService.trocaDeEstado.emit(1);
  }
}
