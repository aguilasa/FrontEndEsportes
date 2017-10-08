export class TipoModel {
    id: number;
    nome: string;

    constructor(nome: string, id?: number) {
        this.id = 0;
        this.nome = nome;
        if (id) {
            this.id = id;
        }
    }
}
