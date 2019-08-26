import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VsmFormLoginComponent } from './vsm-form-login/vsm-form-login.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AutenticacaoService } from '../../autenticacao/autenticacao/autenticacao.service';
import { LocalStorageService } from '../../autenticacao/autenticacao/local-storage.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MensagensService } from '../../servicos/mensagens.service';

@NgModule({
  declarations: [VsmFormLoginComponent],
  imports: [CommonModule, MatInputModule, MatButtonModule, FormsModule, MatSnackBarModule],
  exports: [VsmFormLoginComponent],
  providers: [AutenticacaoService, LocalStorageService, MensagensService]
})
export class VsmFormLoginModule {}
