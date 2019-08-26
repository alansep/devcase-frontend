import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../autenticacao/autenticacao/autenticacao.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalStorageService } from '../autenticacao/autenticacao/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
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
