import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VsmNavbarService {

  /**
   * Objeto Estático, utilizado para trocar informações entre os componentes!
   */
  public static trocaDeEstado = new EventEmitter<number>();

  constructor() { }
}
