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
export class AtualizacaoClienteComponent implements OnInit {
  public cliente = new Cliente();
  public opcoesSexo = [
    { value: 'M', viewValue: 'Masculino' },
    { value: 'F', viewValue: 'Feminino' }
  ];

  constructor(
    private clientesService: ClientesService,
    private route: ActivatedRoute,
    private mensagensService: MensagensService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.clientesService
        .buscarCliente(res.id)
        .subscribe(response => (this.cliente = response));
    });
  }

  public atualizarCliente(): void {
    this.clientesService.atualizarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes']);
      this.mensagensService.exibirMensagem('Cliente atualizado com sucesso!');
    }, () => this.mensagensService.exibirMensagem('Erro ao atualizar cliente!'));
  }
}
