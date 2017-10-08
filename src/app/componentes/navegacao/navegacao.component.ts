import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  paginas: Array<any> = [
    { texto: 'Times', sub: [{ texto: 'Listar', rota: '/time' }, { texto: 'Novo', rota: '/time/novo' }] },
    { texto: 'Modalidades', sub: [{ texto: 'Listar', rota: '/modalidade' }, { texto: 'Nova', rota: '/modalidade/novo' }] },
    { texto: 'Fases', sub: [{ texto: 'Listar', rota: '/fase' }, { texto: 'Nova', rota: '/fase/novo' }] },
    { texto: 'Tipos', sub: [{ texto: 'Listar', rota: '/tipo' }, { texto: 'Novo', rota: '/tipo/novo' }] },
    { texto: 'Jogos', sub: [{ texto: 'Listar', rota: '/jogo' }, { texto: 'Novo', rota: '/jogo/novo' }] },
    { texto: 'Situações', sub: [{ texto: 'Listar', rota: '/situacao' }, { texto: 'Nova', rota: '/situacao/novo' }] }
  ];

  constructor() { }

  ngOnInit() {
  }

}
