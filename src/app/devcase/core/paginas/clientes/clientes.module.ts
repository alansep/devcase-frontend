import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaClientesComponent } from './pagina-clientes/pagina-clientes.component';
import { TableModule } from 'primeng/table';
import { ClientesService } from './clientes.service';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AtualizacaoClienteComponent } from './pagina-clientes/atualizacao-cliente/atualizacao-cliente.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [PaginaClientesComponent, AtualizacaoClienteComponent],
  imports: [
    CommonModule,
    TableModule,
    MatButtonModule,
    DialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [PaginaClientesComponent],
  providers: [ClientesService]
})
export class ClientesModule {}
