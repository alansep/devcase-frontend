import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaLoginComponent } from './pagina-login/pagina-login.component';
import { VsmNavbarModule } from '../../componentes/vsm-navbar/vsm-navbar.module';
import { VsmFormLoginModule } from '../../componentes/vsm-form-login/vsm-form-login.module';

@NgModule({
  declarations: [PaginaLoginComponent],
  imports: [
    CommonModule, VsmNavbarModule, VsmFormLoginModule
  ],
  exports: [PaginaLoginComponent]
})
export class LoginModule { }
