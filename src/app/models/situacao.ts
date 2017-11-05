export class Situacao {
    id: number;
    nome: string;

    constructor(nome?: string, id?: number) {
        this.id = id ? id : 0;
        this.nome = nome ? nome : '';
    }
}
