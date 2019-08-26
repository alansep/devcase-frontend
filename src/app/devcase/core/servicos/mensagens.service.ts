import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MensagensService {
  constructor(private objDeMensagem: MatSnackBar) {}

  public exibirMensagem(mensagem: string) {
    const config = new MatSnackBarConfig();
    config.panelClass = ['custom-class'];
    config.duration = 1000;
    this.objDeMensagem.open(mensagem, '', config);
  }
}
