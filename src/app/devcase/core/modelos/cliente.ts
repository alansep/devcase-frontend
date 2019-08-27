import { Endereco } from './endereco';

/**
 * @author Gabriel Alan
 * @description Classe de modelo de Cliente.
 */
export class Cliente {
  public codigo: number;
  public pontuacao: number;
  public nome: string;
  public idade: number;
  public sexo: string;
  public email: string;
  public telefone: string;
  public endereco = new Endereco();
}
