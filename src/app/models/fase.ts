import { Jogo } from './jogo';
import { Tipo } from './tipo';
import { Modalidade } from './modalidade';

export class Fase {
    id: number;
    modalidade: Modalidade;
    tipo: Tipo;
    nome: string;
    jogos: Jogo[];

    constructor(nome?: string, id?: number, modalidade?: Modalidade, tipo?: Tipo) {
        this.id = id | 0;
        this.modalidade = modalidade ? modalidade : new Modalidade();
        this.tipo = tipo ? tipo : new Tipo();
        this.nome = nome ? nome : '';
        this.jogos = [];
    }
}
