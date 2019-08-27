import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from '../autenticacao/autenticacao/local-storage.service';

@Injectable({
  providedIn: 'root'
})
/**
 * @author Gabriel Alan
 * @description Classe de Guarda de Rotas que implementa a interface CanActivate
 */
export class AuthGuard implements CanActivate {
  
   /**
   * @description Método Sobrescrito que tem como função validar o token e a possibilidade do usuário estar
   *  em uma determinada página. 
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  boolean {
    const helper = new JwtHelperService();
    try{
      if(helper.isTokenExpired(this.localStorageService.lerToken())){
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    } catch {
      this.router.navigate(['/login']);
      return false;
    }   
  }

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}
}
