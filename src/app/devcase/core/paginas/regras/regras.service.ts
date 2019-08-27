import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Regra } from '../../modelos/regra';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../../autenticacao/autenticacao/local-storage.service';

@Injectable({
  providedIn: 'root'
})
/**
 * @author Gabriel Alan
 * @description Classe de Serviço de Regras
 */
export class RegrasService {
  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  /**
   * @description Método que tem como função buscar todas as regras cadastradas na aplicação.
   */
  public buscarRegras(): Observable<Regra[]> {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.localStorageService.lerToken());
    return this.http.get<Regra[]>(environment.API_ENDERECO + '/regras', {
      headers: header
    });
  }

   /**
   * @description Método que tem como função buscar o valor mínimo permitido para uma nova regra ser criada.
   */
  public buscarValorMinimo(): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.localStorageService.lerToken());
    return this.http.get<any>(environment.API_ENDERECO + '/regras/valor-minimo', {
      headers: header
    });
  }


   /**
   * @description Método que tem como função adicionar uma nova regra.
   */
  public adicionarRegra(valor: number, pontos: number): Observable<Regra> {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.localStorageService.lerToken());
    return this.http.post<any>(environment.API_ENDERECO + '/regras?valor=' + valor + '&pontos=' + pontos, {}, {
      headers: header
    });
  }

  /**
   * @description Método que tem como função remover uma regra atráves de seu código.
   * @param id Código da Regra
   */
  public removerRegra(id: number): Observable<any> {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.localStorageService.lerToken());
    return this.http.delete<any>(environment.API_ENDERECO + '/regras/' + id, {
      headers: header
    });
  }
}
