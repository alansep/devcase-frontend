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
export class VsmNavbarComponent implements OnInit {
  
  public estado: number;
  
  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public mensagensService: MensagensService
  ) {}
    
  ngOnInit() {
    VsmNavbarService.trocaDeEstado.subscribe(response => {
      this.estado = response;
      if(response != 0 && response != 1 && response != 2){
        this.autenticacaoService.deslogar();
        this.router.navigate(['/login']);
      }
    });
  }

  public sair(): void {
    this.autenticacaoService.deslogar();
    this.mensagensService.exibirMensagem('Usuário desconectado com sucesso!');
    this.router.navigate(['/login']);
  }

  public irPara(endereco: string){
    this.router.navigate([endereco]);

  }
}
