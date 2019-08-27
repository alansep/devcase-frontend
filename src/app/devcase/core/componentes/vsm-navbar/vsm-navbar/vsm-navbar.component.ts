import { Component, OnInit, Input } from '@angular/core';
import { AutenticacaoService } from '../../../autenticacao/autenticacao/autenticacao.service';
import { Router } from '@angular/router';
import { MensagensService } from '../../../servicos/mensagens.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { VsmNavbarService } from '../servicos/vsm-navbar.service';

@Component({
  selector: 'vsm-navbar',
  templateUrl: './vsm-navbar.component.html',
  styleUrls: ['./vsm-navbar.component.css']
})
/**
 * @author Gabriel Alan
 * @description Classe do componente de Navbar!
 *  OBSERVAÇÃO:
 *   A aparência da navbar é alterada através dos valores de estado!
 *   estado = 0 => Está na tela de Login,
 *   estado = 1 => Está na tela Principal,
 *   estado = 2 => Está em alguma tela de funcionalidade específica
 */
export class VsmNavbarComponent implements OnInit {
  public estado: number;

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public mensagensService: MensagensService
  ) {}

  /**
   * @description No escopo do ngOnInit há uma inscrição para a escuta de Eventos que trocarão o estado deste componente.
   * Caso o código seja desconhecido, o usuário perderá seu token e será redirecionado à página de login.
   */
  ngOnInit() {
    VsmNavbarService.trocaDeEstado.subscribe(response => {
      this.estado = response;
      if (response != 0 && response != 1 && response != 2) {
        this.autenticacaoService.deslogar();
        this.router.navigate(['/login']);
      }
    });
  }

  /**
   * @description Método que tem como função realizar as rotinas de encerramento de autenticação,
   *  removendo o token do usuário e o redirecionado à página de login.
   */
  public sair(): void {
    this.autenticacaoService.deslogar();
    this.mensagensService.exibirMensagem('Usuário desconectado com sucesso!');
    this.router.navigate(['/login']);
  }

  /**
   * @description Método que tem como função navegar para uma outra rota especificada.
   * @param endereco 
   */
  public irPara(endereco: string) {
    this.router.navigate([endereco]);
  }
}
