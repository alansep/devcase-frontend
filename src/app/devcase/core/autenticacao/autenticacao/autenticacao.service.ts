import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credencial } from '../../modelos/credencial';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private http: HttpClient, private oldHttp: Http, private localStorageService: LocalStorageService) {}

  public logar(dados: Credencial): Observable<any> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic dnNtZnJvbnRlbmQ6ZGV2Y2FzZQ==');
    const body = `username=${dados.usuario}&password=${dados.senha}&grant_type=password`;

    return this.oldHttp.post(environment.API_ENDERECO + '/oauth/token', body, {
      headers,
      withCredentials: true
    });
  }

  public deslogar(): void {
    this.localStorageService.removerToken();
  }

}
