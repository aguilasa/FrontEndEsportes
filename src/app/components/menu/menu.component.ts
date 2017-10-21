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
        label: 'Times'
      },
      {
        label: 'Modalidades'
      },
      {
        label: 'Fases'
      },
      {
        label: 'Tipos',
        routerLink: ['tipo']
      },
      {
        label: 'Jogos'
      },
      {
        label: 'Situações'
      }
    ];
  }

}
