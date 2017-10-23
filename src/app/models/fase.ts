export class Time {
    id: number;
    modalidade_id: number;
    tipo_id: number;
    nome: string;

    constructor(nome?: string, id?: number, modalidade_id?: number, tipo_id?: number) {
        this.id = id | 0;
        this.modalidade_id = modalidade_id | 0;
        this.tipo_id = tipo_id | 0;
        this.nome = nome ? nome : '';
    }
}
