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
