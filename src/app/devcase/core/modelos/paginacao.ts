/**
 * @author Gabriel Alan
 * @description Classe de modelo de Paginação. Observação: É necessário passar um Tipo no Generics, para que a
 *  paginação possa ser utilizada por mais de um modelo.
 */

export class Paginacao<Tipo> {
  content: Tipo;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: boolean;
  totalElements: number;
  totalPages: number;
}
