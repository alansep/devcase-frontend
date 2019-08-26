import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VsmNavbarService {

  public static trocaDeEstado = new EventEmitter<number>();

  constructor() { }
}
