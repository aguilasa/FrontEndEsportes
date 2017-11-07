import { NgModule, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Jogo } from '../../models/jogo';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.css']
})
export class PlacarComponent implements OnInit {

  @Input() jogo: Jogo;

  @Input() futebol: boolean;

  @Input() empate: boolean;

  @Input() alterou: boolean;

  @Input() valido: boolean;

  constructor() { }

  ngOnInit() {
    this.valido = false;
    this.empate = false;
  }

  mudarPlacarUm() {
    this.alterou = true;

    if (this.jogo.placar1 === null) {
      this.jogo.placar1 = 0;
    }

    if (this.empate) {
      this.jogo.placar2 = this.jogo.placar1;
    }

  }

  mudarPlacarDois() {
    this.alterou = true;
    if (this.jogo.placar2 === null) {
      this.jogo.placar2 = 0;
    }

    if (this.empate) {
      this.jogo.placar1 = this.jogo.placar2;
    }
    this.validar();
  }

  mudarPenaltiUm() {
    this.alterou = true;
    if (this.jogo.penalti1 === null) {
      this.jogo.penalti1 = 0;
    }
    this.validar();
  }

  mudarPenaltiDois() {
    this.alterou = true;
    if (this.jogo.penalti2 === null) {
      this.jogo.penalti2 = 0;
    }
    this.validar();
  }

  mudarEmpate() {
    this.alterou = true;
    this.mudarPlacarUm();
    this.validar();
  }

  validar() {
    this.valido = true;
    if (this.futebol) {
      this.valido = this.jogo.placar1 != this.jogo.placar2 || (this.empate && this.jogo.penalti1 != this.jogo.penalti2);
    } else {

    }
  }

}
