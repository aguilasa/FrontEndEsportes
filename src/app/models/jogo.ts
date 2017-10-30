import { Fase } from './fase';
import { Situacao } from './situacao';
import { Time } from './time';

export class Jogo {
    id: number;
    fase: Fase;
    situacao: Situacao;
    time1: Time;
    time2: Time;
    ordem: number;
    placar1: number;
    penalti1: number;
    placar2: number;
    penalti2: number;

    constructor(id?: number, fase?: Fase, situacao?: Situacao, time1?: Time, time2?: Time,
        ordem?: number, placar1?: number, penalti1?: number, placar2?: number, penalti2?: number) {
        this.id = id ? id : 0;
        this.fase = fase ? fase : new Fase();
        this.situacao = situacao ? situacao : new Situacao();
        this.time1 = time1 ? time1 : new Time();
        this.time2 = time2 ? time2 : new Time();
        this.ordem = ordem ? ordem : 0;
        this.placar1 = placar1 ? placar1 : 0;
        this.penalti1 = penalti1 ? penalti1 : 0;
        this.placar2 = placar2 ? placar2 : 0;
        this.penalti2 = penalti2 ? penalti2 : 0;
    }
}
