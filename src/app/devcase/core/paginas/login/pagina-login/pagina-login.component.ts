import { Component, OnInit } from '@angular/core';
import { VsmNavbarService } from '../../../componentes/vsm-navbar/servicos/vsm-navbar.service';

@Component({
  selector: 'app-pagina-login',
  templateUrl: './pagina-login.component.html',
  styleUrls: ['./pagina-login.component.css']
})
/**
 * @author Gabriel Alan
 * @description Classe de Componente da Página de Login
 */
export class PaginaLoginComponent implements OnInit {
  constructor() {}

  /**
   * @description No ngOnInit um evento de troca de navbar é emitido.
   */
  ngOnInit() {
    VsmNavbarService.trocaDeEstado.emit(0);
  }
}
