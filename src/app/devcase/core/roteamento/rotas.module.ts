import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaLoginComponent } from '../paginas/login/pagina-login/pagina-login.component';
import { LoginModule } from '../paginas/login/login.module';
import { PaginaHomeComponent } from '../paginas/home/pagina-home/pagina-home.component';
import { HomeModule } from '../paginas/home/home.module';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
    {path: 'login', component: PaginaLoginComponent},
    {path: 'home', component: PaginaHomeComponent, canActivate: [AuthGuard]},
    {path: '', component: PaginaLoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LoginModule, HomeModule],
  exports: [RouterModule]
})
export class RotasModule { }
