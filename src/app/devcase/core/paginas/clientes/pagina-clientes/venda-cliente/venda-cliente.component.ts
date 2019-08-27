import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ClientesService } from '../../clientes.service';
import { MensagensService } from 'src/app/devcase/core/servicos/mensagens.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Venda } from 'src/app/devcase/core/modelos/venda';

@Component({
  selector: 'app-venda-cliente',
  templateUrl: './venda-cliente.component.html',
  styleUrls: ['./venda-cliente.component.css']
})
export class VendaClienteComponent implements OnInit {

  private idCliente: number;

  constructor(
    private title: Title,
    private clientesService: ClientesService,
    private mensagensService: MensagensService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.title.setTitle('Vendas');
  }

  ngOnInit() {
    this.route.params.subscribe(response => this.idCliente = Number.parseInt(response.id));
  }

  public registrarVenda(valores: any): void {
    let venda = new Venda();
    venda.cliente.codigo = this.idCliente;
    venda.data = this.obterData(valores.data);
    venda.valor = valores.valor;
    console.log(venda);
    
    this.clientesService.registrarVenda(venda).subscribe(() => {
      this.mensagensService.exibirMensagem('Venda cadastrada com sucesso!');
      this.router.navigate(['/clientes']);
    }, () => this.mensagensService.exibirMensagem('Erro ao cadastrar venda!'));
  }

  private obterData(data: Date) {
    let res = data
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, '');
    let ano = res.slice(0,4);
    let mes = res.slice(4,6);
    let dia = res.slice(6,9);
    let dataRetorno = dia + '/' + mes + '/' + ano;
    return dataRetorno;
  }
}
