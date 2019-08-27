import { Cliente } from './cliente';

/**
 * @author Gabriel Alan
 * @description Classe de modelo de Venda.
 */
export class Venda {
  public codigo: number;
  public cliente = new Cliente();
  public valor: number;
  public data: string;
}
