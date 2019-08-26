import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaLoginComponent } from '../paginas/login/pagina-login/pagina-login.component';
import { LoginModule } from '../paginas/login/login.module';
import { PaginaHomeComponent } from '../paginas/home/pagina-home/pagina-home.component';
import { HomeModule } from '../paginas/home/home.module';
import { AuthGuard } from './auth.guard';
import { ClientesModule } from '../paginas/clientes/clientes.module';
import { PaginaClientesComponent } from '../paginas/clientes/pagina-clientes/pagina-clientes.component';


const routes: Routes = [
    {path: 'login', component: PaginaLoginComponent},
    {path: 'home', component: PaginaHomeComponent, canActivate: [AuthGuard]},
    {path: 'clientes', component: PaginaClientesComponent, canActivate: [AuthGuard]},
    {path: '', component: PaginaLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, HomeModule, ClientesModule],
  exports: [RouterModule]
})
export class RotasModule { }
