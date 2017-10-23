import { Component, OnInit } from '@angular/core';
import { MenubarModule, MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Times',
        routerLink: ['time']
      },
      {
        label: 'Modalidades',
        routerLink: ['modalidade']
      },
      {
        label: 'Fases',
        routerLink: ['fase']
      },
      {
        label: 'Tipos',
        routerLink: ['tipo']
      },
      {
        label: 'Jogos',
        routerLink: ['jogo']
      },
      {
        label: 'Situações',
        routerLink: ['situacao']
      }
    ];
  }

}
