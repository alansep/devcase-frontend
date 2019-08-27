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

/**
 * @author Gabriel Alan
 * @description Classe de Componente da Página de Venda.
 */
export class VendaClienteComponent implements OnInit {
  /**
   * @description Variável que tem como função receber o id por parâmetro de roteamento.
   */
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

  /**
   * @description No ngOnInit, a variável idCliente recebe o id do cliente
   *  informado por parâmetro através de roteamento;
   */
  ngOnInit() {
    this.route.params.subscribe(
      response => (this.idCliente = Number.parseInt(response.id))
    );
  }

  /**
 * @description  Método que tem como função obter os dados do formulário de Venda, estruturar e registrá-los
 *  como uma nova venda, bonificando ou não(caso o valor não esteja dentro de uma regra) o cliente.
 */
  public registrarVenda(valores: any): void {
    const venda = new Venda();
    venda.cliente.codigo = this.idCliente;
    venda.data = this.obterData(valores.data);
    venda.valor = valores.valor;

    this.clientesService.registrarVenda(venda).subscribe(
      () => {
        this.mensagensService.exibirMensagem('Venda cadastrada com sucesso!');
        this.router.navigate(['/clientes']);
      },
      () => this.mensagensService.exibirMensagem('Erro ao cadastrar venda!')
    );
  }

  /**
   * @description Método que tem como função obter uma data de Javascript e transformála em uma data no 
   *  padrão yyyy/MM/dd, no formato de string.
   * @param data 
   * @returns data: String
   */
  private obterData(data: Date): string {
    const res = data
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, '');
    const ano = res.slice(0, 4);
    const mes = res.slice(4, 6);
    const dia = res.slice(6, 9);
    const dataRetorno = dia + '/' + mes + '/' + ano;
    return dataRetorno;
  }
}
