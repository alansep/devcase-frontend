import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regra } from '../../modelos/regra';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../autenticacao/autenticacao/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RegrasService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  public buscarRegras(): Observable<Regra[]> {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.localStorageService.lerToken());
    return this.http.get<Regra[]>(environment.API_ENDERECO + '/regras', {
      headers: header
    });
  }

  public removerRegra(id: number): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.localStorageService.lerToken());
    return this.http.delete<any>(environment.API_ENDERECO + '/regras/' + id, {
      headers: header
    });
  }
}
