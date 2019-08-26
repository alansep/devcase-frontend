import { Component, OnInit } from '@angular/core';
import { VsmNavbarService } from '../../../componentes/vsm-navbar/servicos/vsm-navbar.service';
import { Title } from '@angular/platform-browser';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../../../modelos/cliente';

@Component({
  selector: 'app-pagina-clientes',
  templateUrl: './pagina-clientes.component.html',
  styleUrls: ['./pagina-clientes.component.css']
})
export class PaginaClientesComponent implements OnInit {

  public clientes = new Array<Cliente>();

  constructor(private title: Title, private clientesService: ClientesService) {
    this.title.setTitle('Gestão de Clientes');
  }

  ngOnInit() {
    VsmNavbarService.trocaDeEstado.emit(2);
    this.clientesService.buscarClientes().subscribe(response => this.clientes = response.content);
  }
}
