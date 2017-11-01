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

  empate: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.jogo);
    console.log(this.futebol);
  }

  mudarPlacar() {

  }

}
