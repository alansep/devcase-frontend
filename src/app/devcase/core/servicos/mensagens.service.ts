import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
/**
 * @author Gabriel Alan
 * @description Classe de Serviço para prover o envio de mensagens(pop-ups) na aplicação.
 */
export class MensagensService {
  constructor(private objDeMensagem: MatSnackBar) {}

  /**
   * @description Método que tem como função exibir uma mensagem, passada por parâmetro!
   * @param mensagem Mensagem Customizada
   */
  public exibirMensagem(mensagem: string): void {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-class'];
    config.duration = 1000;
    this.objDeMensagem.open(mensagem, '', config);
  }
}
