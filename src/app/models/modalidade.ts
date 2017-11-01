export class Modalidade {
    id: number;
    nome: string;
    futebol: number;

    constructor(nome?: string, futebol?: number, id?: number) {
        this.id = id ? id : 0;
        this.nome = nome ? nome : '';
        this.futebol = futebol ? futebol : 0;
    }
}
