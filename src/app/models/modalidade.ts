export class Modalidade {
    id: number;
    nome: string;

    constructor(nome?: string, id?: number) {
        this.id = id | 0;
        this.nome = nome ? nome : '';
    }
}
