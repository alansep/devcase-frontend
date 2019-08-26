import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VsmNavbarComponent } from './vsm-navbar/vsm-navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MensagensService } from '../../servicos/mensagens.service';

@NgModule({
  declarations: [VsmNavbarComponent],
  imports: [
    CommonModule, MatButtonModule
  ],
  exports: [VsmNavbarComponent],
  providers: [MensagensService]
})
export class VsmNavbarModule { }
