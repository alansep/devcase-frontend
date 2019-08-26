import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaClientesComponent } from './pagina-clientes/pagina-clientes.component';
import { TableModule } from 'primeng/table';
import { ClientesService } from './clientes.service';

@NgModule({
  declarations: [PaginaClientesComponent],
  imports: [CommonModule, TableModule],
  exports: [PaginaClientesComponent],
  providers: [ClientesService]
})
export class ClientesModule {}
