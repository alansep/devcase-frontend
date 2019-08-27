import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/devcase/core/modelos/cliente';
import { ClientesService } from '../../clientes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagensService } from 'src/app/devcase/core/servicos/mensagens.service';

@Component({
  selector: 'atualizacao-cliente',
  templateUrl: './atualizacao-cliente.component.html',
  styleUrls: ['./atualizacao-cliente.component.css']
})
/**
 * @author Gabriel Alan
 * @description Classe de Componente da Página de Atualização de Clientes.
 */
export class AtualizacaoClienteComponent implements OnInit {
  /**
   * @description Cliente utuilizado para atualização dos dados
   */
  public cliente = new Cliente();

  /**
   * @description Objeto do tipo any, utilizado apenas para a caixa de seleção de sexo.
   */
  public opcoesSexo: any = [
    { value: 'M', viewValue: 'Masculino' },
    { value: 'F', viewValue: 'Feminino' }
  ];

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private mensagensService: MensagensService,
    private router: Router
  ) {}

  /**
   * @description No ngOnInit é realizado uma busca de cliente
   *  através do id passado por parâmetro pelo roteamento.
   */
  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.clientesService
        .buscarCliente(res.id)
        .subscribe(response => (this.cliente = response));
    });
  }

   public atualizarCliente(): void {
    this.clientesService.atualizarCliente(this.cliente).subscribe(
      () => {
        this.router.navigate(['/clientes']);
        this.mensagensService.exibirMensagem('Cliente atualizado com sucesso!');
      },
      () => this.mensagensService.exibirMensagem('Erro ao atualizar cliente!')
    );
  }
}
