import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaClientesComponent } from './pagina-clientes/pagina-clientes.component';
import { TableModule } from 'primeng/table';
import { ClientesService } from './clientes.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [PaginaClientesComponent],
  imports: [
    CommonModule,
    TableModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    DialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
   ],
  exports: [PaginaClientesComponent],
  providers: [ClientesService]
})
export class ClientesModule {}
