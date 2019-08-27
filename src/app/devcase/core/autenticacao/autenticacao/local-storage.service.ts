import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * @author Gabriel Alan
 * @description Classe de serviço que tem como função realizar todas as operações necessárias referentes a
 *  Local Storage.
 */
export class LocalStorageService {
  constructor() {}

  /**
   * Método que tem como função receber um token e gravá-lo com uma chave no Local Storage.
   * @param token 
   */
  public gravarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  /**
   * @description Método que tem como função buscar um token gravado no Local Storage.
   * @returns token: string
   */
  public lerToken(): string {
    return localStorage.getItem('token');
  }

  /**
   * @description Método que tem como função "invalidar" o token do usuário, definindo o mesmo para null.
   */
  public removerToken(): void {
    localStorage.setItem('token', null);
  }
}
