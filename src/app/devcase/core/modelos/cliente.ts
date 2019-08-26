import { Endereco } from './endereco';

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
