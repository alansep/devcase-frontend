import { Cliente } from './cliente';

export class Venda {
    public codigo:number;
    public cliente = new Cliente();
    public valor: number;
    public data: string;
}