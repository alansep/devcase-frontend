import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {}

  public gravarToken(token: string): void {
    localStorage.setItem('token', token);
  }

  public lerToken(): string {
    return localStorage.getItem('token');
  }

  public removerToken(): void {
    localStorage.setItem('token', null);
  }
}
