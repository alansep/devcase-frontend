import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../../modelos/cliente';
import { environment } from 'src/environments/environment';
import { AutenticacaoService } from '../../autenticacao/autenticacao/autenticacao.service';
import { LocalStorageService } from '../../autenticacao/autenticacao/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  public buscarClientes(): Observable<Cliente[]> {
    let header = new HttpHeaders().set("Content-Type","application/json").set("Authorization","Bearer " + this.localStorageService.lerToken());
    return this.http.get<Cliente[]>(environment.API_ENDERECO + '/clientes', {headers: header});
  }
}
