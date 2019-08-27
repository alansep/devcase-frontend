import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { VsmNavbarService } from '../../../componentes/vsm-navbar/servicos/vsm-navbar.service';
import { Title } from '@angular/platform-browser';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../../../modelos/cliente';
import { Paginacao } from '../../../modelos/paginacao';
import { Table } from 'primeng/table';
import { Estado } from '../../../modelos/estado';
import { Cidade } from '../../../modelos/cidade';

@Component({
  selector: 'app-pagina-clientes',
  templateUrl: './pagina-clientes.component.html',
  styleUrls: ['./pagina-clientes.component.css']
})
export class PaginaClientesComponent implements OnInit{
 

  public conteudoTabela = new Paginacao<Cliente[]>();
  public dialogCriacao: boolean;
  public dialogAlteracao: boolean;
  public dialogConfirmacao: boolean;
  public opcoesSexo = [
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Feminino'}
  ]
  public estados: Estado[] = [];
  public cidades: Cidade[] = [];

  constructor(private title: Title, private clientesService: ClientesService) {
    this.title.setTitle('Gestão de Clientes');
  }

  ngOnInit() {
    VsmNavbarService.trocaDeEstado.emit(2);
    this.clientesService.buscarClientes().subscribe(response => this.conteudoTabela = response);
    this.clientesService.buscarEstados().subscribe(response => this.estados = response);
  }

  public buscarCidades(id:string){
    this.clientesService.buscarCidades(id).subscribe(response => this.cidades = response);
  }

  public cadastrar(dados: any){
    console.log(dados);
    
  }

  
}
