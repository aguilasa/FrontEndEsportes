import { NgModule, Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

import { Jogo } from '../../models/jogo';

@Component({
  selector: 'app-placar',
  templateUrl: './placar.component.html',
  styleUrls: ['./placar.component.css']
})
export class PlacarComponent implements OnInit, AfterViewInit {

  empate: boolean;
  maxUm: number;
  maxDois: number;

  @Input() jogo: Jogo;
  @Input() futebol: boolean;
  @Input() alterou: boolean;
  @Input() valido: boolean;
  @Input() disabled: boolean;
  @Output() onClickAtualizar: EventEmitter<Jogo> = new EventEmitter();
  @Output() onClickFinalizar: EventEmitter<Jogo> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.validar();
    this.maximos();
  }

  ngAfterViewInit() {

  }

  mudarPlacarUm() {
    this.alterou = true;

    if (this.jogo.placar1 === null) {
      this.jogo.placar1 = 0;
    }

    if (!this.futebol) {
      this.maxDois = 2;
      if (this.jogo.placar1 == 2) {
        this.maxDois = 1;
      }
    }

    this.validar();
  }

  mudarPlacarDois() {
    this.alterou = true;
    if (this.jogo.placar2 === null) {
      this.jogo.placar2 = 0;
    }

    if (!this.futebol) {
      this.maxUm = 2;
      if (this.jogo.placar2 == 2) {
        this.maxUm = 1;
      }
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

  validar() {
    this.valido = true;
    this.empatado();
    if (this.futebol) {
      this.valido = this.jogo.placar1 !== this.jogo.placar2 || (this.empate && this.jogo.penalti1 !== this.jogo.penalti2);
    } else {
      this.valido = this.jogo.placar1 !== this.jogo.placar2
        && ((this.jogo.placar1 + this.jogo.placar2) === 3 || (this.jogo.placar1 + this.jogo.placar2) === 2);
    }
  }

  private maximos() {
    this.maxUm = this.maxDois = 100;

    if (!this.futebol) {
      this.maxUm = this.maxDois = 2;

      if (this.jogo.placar1 == 2) {
        this.maxDois = 1;
      }

      if (this.jogo.placar2 == 2) {
        this.maxUm = 1;
      }
    }
  }

  private empatado() {
    this.empate = this.jogo.placar1 === this.jogo.placar2;
  }

  clickAtualizar() {
    this.onClickAtualizar.emit();
  }

  clickFinalizar() {
    this.onClickFinalizar.emit();
  }

}
