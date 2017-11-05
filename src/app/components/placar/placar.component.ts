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

  constructor() { }

  ngOnInit() {

  }

  mudarPlacarUm() {
    if (this.jogo.placar1 === null) {
      this.jogo.placar1 = 0;
    }

    if (this.empate) {
      this.jogo.placar2 = this.jogo.placar1;
    }
  }

  mudarPlacarDois() {
    if (this.jogo.placar2 === null) {
      this.jogo.placar2 = 0;
    }

    if (this.empate) {
      this.jogo.placar1 = this.jogo.placar2;
    }
  }

  mudarPenaltiUm() {
    if (this.jogo.penalti1 === null) {
      this.jogo.penalti1 = 0;
    }
  }

  mudarPenaltiDois() {
    if (this.jogo.penalti2 === null) {
      this.jogo.penalti2 = 0;
    }
  }

  mudarEmpate() {
    this.mudarPlacarUm();
  }

}
