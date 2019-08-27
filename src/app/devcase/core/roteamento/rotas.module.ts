import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaLoginComponent } from '../paginas/login/pagina-login/pagina-login.component';
import { LoginModule } from '../paginas/login/login.module';
import { PaginaHomeComponent } from '../paginas/home/pagina-home/pagina-home.component';
import { HomeModule } from '../paginas/home/home.module';
import { AuthGuard } from './auth.guard';
import { ClientesModule } from '../paginas/clientes/clientes.module';
import { PaginaClientesComponent } from '../paginas/clientes/pagina-clientes/pagina-clientes.component';
import { AtualizacaoClienteComponent } from '../paginas/clientes/pagina-clientes/atualizacao-cliente/atualizacao-cliente.component';
import { PaginaRegrasComponent } from '../paginas/regras/pagina-regras/pagina-regras.component';
import { RegrasModule } from '../paginas/regras/regras.module';
import { VendaClienteComponent } from '../paginas/clientes/pagina-clientes/venda-cliente/venda-cliente.component';


const routes: Routes = [
    {path: 'login', component: PaginaLoginComponent},
    {path: 'home', component: PaginaHomeComponent, canActivate: [AuthGuard]},
    {path: 'clientes', component: PaginaClientesComponent, canActivate: [AuthGuard]},
    {path: 'clientes/atualizacao/:id', component: AtualizacaoClienteComponent, canActivate: [AuthGuard]},
    {path: 'clientes/:id/venda', component: VendaClienteComponent, canActivate: [AuthGuard]},
    {path: 'regras', component: PaginaRegrasComponent, canActivate: [AuthGuard]},
    {path: '', component: PaginaLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, HomeModule, ClientesModule, RegrasModule],
  exports: [RouterModule]
})
export class RotasModule { }
