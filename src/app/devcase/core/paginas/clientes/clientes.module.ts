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
import { VendaClienteComponent } from './pagina-clientes/venda-cliente/venda-cliente.component';
import { MatDatepickerModule,  } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  declarations: [
    PaginaClientesComponent,
    AtualizacaoClienteComponent,
    VendaClienteComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MatButtonModule,
    DialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TooltipModule
  ],
  exports: [PaginaClientesComponent],
  providers: [ClientesService]
})
export class ClientesModule {}
