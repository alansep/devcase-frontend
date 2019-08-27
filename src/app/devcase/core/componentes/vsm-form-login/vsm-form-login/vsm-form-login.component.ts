import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../../autenticacao/autenticacao/autenticacao.service';
import { Credencial } from '../../../modelos/credencial';
import { LocalStorageService } from '../../../autenticacao/autenticacao/local-storage.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MensagensService } from '../../../servicos/mensagens.service';

@Component({
  selector: 'vsm-login',
  templateUrl: './vsm-form-login.component.html',
  styleUrls: ['./vsm-form-login.component.css']
})

/**
 * @author Gabriel Alan
 * @description Classe do componente de Login!
 */
export class VsmFormLoginComponent implements OnInit {
  constructor(
    private autenticacaoService: AutenticacaoService,
    private localStorageService: LocalStorageService,
    private titulo: Title,
    private router: Router,
    private mensagensService: MensagensService
  ) {
    this.titulo.setTitle('Login');
  }

  ngOnInit() {}

  /**
   * @description Método que tem como função receber os dados do formulário e 
   *  obter um token de acesso à aplicação!
   * @param valores Valores do formulário
   */
  public logar(valores: any): void {
    const credencial = new Credencial();
    credencial.usuario = valores.usuario;
    credencial.senha = valores.senha;
    this.autenticacaoService.logar(credencial).subscribe(
      response => {
        this.localStorageService.gravarToken(response.json().access_token);
        this.mensagensService.exibirMensagem('Logado com Sucesso!');
        this.router.navigate(['/home']);
      },
      () => this.mensagensService.exibirMensagem('Usuário ou senha incorretos!')
    );
  }
}
