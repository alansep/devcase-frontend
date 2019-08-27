import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaRegrasComponent } from './pagina-regras/pagina-regras.component';
import { RegrasService } from './regras.service';
import { TableModule } from 'primeng/table';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from 'primeng/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PaginaRegrasComponent],
  imports: [
    CommonModule,
    TableModule,
    MatButtonModule,
    DialogModule,
    MatInputModule,
    FormsModule
  ], exports: [
    PaginaRegrasComponent
  ],
  providers: [RegrasService]
})
export class RegrasModule { }
