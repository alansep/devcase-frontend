import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaRegrasComponent } from './pagina-regras/pagina-regras.component';
import { RegrasService } from './regras.service';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PaginaRegrasComponent],
  imports: [
    CommonModule,
    TableModule,
    MatButtonModule
  ], exports: [
    PaginaRegrasComponent
  ],
  providers: [RegrasService]
})
export class RegrasModule { }
