import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../../modelos/cliente';
import { environment } from 'src/environments/environment';
import { AutenticacaoService } from '../../autenticacao/autenticacao/autenticacao.service';
import { LocalStorageService } from '../../autenticacao/autenticacao/local-storage.service';
import { Paginacao } from '../../modelos/paginacao';
import { Estado } from '../../modelos/estado';
import { Cidade } from '../../modelos/cidade';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  public buscarClientes(): Observable<Paginacao<Cliente[]>> {
    let header = new HttpHeaders().set("Content-Type","application/json").set("Authorization","Bearer " + this.localStorageService.lerToken());
    return this.http.get<Paginacao<Cliente[]>>(environment.API_ENDERECO + '/clientes', {headers: header});
  }

  public buscarCliente(codigo:string): Observable<Cliente> {
    let header = new HttpHeaders().set("Content-Type","application/json").set("Authorization","Bearer " + this.localStorageService.lerToken());
    return this.http.get<Cliente>(environment.API_ENDERECO + '/clientes/'+ codigo, {headers: header});
  }

  public cadastrarCliente(cliente: Cliente): Observable<Cliente> {
    let header = new HttpHeaders().set("Content-Type","application/json").set("Authorization","Bearer " + this.localStorageService.lerToken());
    return this.http.post<Cliente>(environment.API_ENDERECO  + '/clientes', cliente, {headers: header});
  }

  public atualizarCliente(cliente: Cliente): Observable<Cliente> {
    console.log('lalala', cliente);
    
    let header = new HttpHeaders().set("Content-Type","application/json").set("Authorization","Bearer " + this.localStorageService.lerToken());
    return this.http.put<Cliente>(environment.API_ENDERECO  + '/clientes/' + cliente.codigo, cliente, {headers: header});

  
  }

  public buscarEstados(): Observable<Estado[]> {
    let header = new HttpHeaders().set("Content-Type","application/json").set("Authorization","Bearer " + this.localStorageService.lerToken());
    return this.http.get<Estado[]>(environment.API_ENDERECO + '/localizacao/UF', {headers: header});
  }

  public buscarCidades(estado: string): Observable<Cidade[]> {
    let header = new HttpHeaders().set("Content-Type","application/json").set("Authorization","Bearer " + this.localStorageService.lerToken());
    return this.http.get<Cidade[]>(environment.API_ENDERECO + '/localizacao/' + estado + '/cidades', {headers: header});
  }
}
