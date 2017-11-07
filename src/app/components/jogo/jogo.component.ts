import { Component, OnInit, ViewEncapsulation, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import {
  PanelModule, MenuItem, Message, ConfirmationService, DropdownModule, SelectItem,
  StepsModule, CheckboxModule, PickListModule
} from 'primeng/primeng';
import { ModalidadeService } from '../../services/modalidade.service';
import { FaseService } from '../../services/fase.service';
import { Modalidade } from '../../models/modalidade';
import { Fase } from '../../models/fase';
import { TimeService } from '../../services/time.service';
import { Time } from '../../models/time';
import { JogoService } from '../../services/jogo.service';
import { Jogo } from '../../models/jogo';
import { Situacao } from '../../models/situacao';
import { PlacarComponent } from '../placar/placar.component';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css'],
  providers: [ModalidadeService, FaseService, TimeService, JogoService, ConfirmationService],
  encapsulation: ViewEncapsulation.None
})
export class JogoComponent implements OnInit, AfterViewInit {

  modalidades: SelectItem[];
  selecionada: Modalidade;
  items: MenuItem[];
  fases: Fase[];
  times: Time[];
  origem: Time[];
  destino: Time[];
  mostrarTimes: boolean;
  mostrarTabela: boolean;
  indice: number = 0;
  menuTabelas: MenuItem[];

  @ViewChildren('placar') placares: QueryList<PlacarComponent>;

  constructor(
    private modalidadeSvc: ModalidadeService,
    private faseSvc: FaseService,
    private confirmationService: ConfirmationService,
    private timeSvc: TimeService,
    private jogoSvc: JogoService) {
    this.loadModalidades();
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.menuTabelas = [
      {
        label: 'Regarregar Jogos', icon: 'fa-refresh', command: () => {
          this.loadJogos();
        }
      }
    ];
    this.loadTimes();
  }

  private loadTimes() {
    this.items = [];
    this.times = [];
    this.origem = [];
    this.destino = [];
    this.timeSvc.getTimes().then(times => {
      this.times = times;
    });
  }

  private loadModalidades() {
    this.modalidades = [];
    this.modalidades.push({ label: 'Selecione uma modalidade', value: null });
    this.modalidadeSvc.getModalidades().then(modalidades => {
      modalidades.forEach(modalidade => {
        this.modalidades.push({ label: modalidade.nome, value: modalidade });
      });
    });
  }

  changeModalidade(e) {
    this.fases = [];
    this.items = [];
    const id = e.value.id;
    if (id == null) { return; }

    this.faseSvc.getFasesByModalidadeId(id).then(fases => {
      this.fases = fases;
      fases.forEach(fase => {
        this.items.push({ label: fase.nome });
      });

      if (this.fases.length > 0) {
        this.loadJogos();
      }
    });
  }

  private resetJogos() {
    this.fases.map((fase) => fase.jogos = []);
  }

  loadJogos() {
    this.resetJogos();
    this.mostrarTimes = false;
    this.mostrarTabela = false;
    this.jogoSvc.getJogosByModalidade(this.selecionada).then(jogos => {
      if (jogos.length === 0) {
        this.origem = [...this.times];
        this.destino = [];
        this.mostrarTimes = true;
      } else {
        this.mostrarTabela = true;
        this.ajustarJogos(jogos);
      }
    });
  }

  private ajustarJogos(jogos: Jogo[]) {
    jogos.map((jogo, i) => {
      let fase: Fase = this.findFase(jogo.fase.id);
      fase.jogos.push(jogo);
      if (!jogo.time1) {
        this.gerarTimes(jogo, i);
      }
    });
  }

  private findFase(id: number) {
    for (let i = 0; i < this.fases.length; i++) {
      if (this.fases[i].id === id) {
        return this.fases[i];
      }
    }
    return undefined;
  }

  private gerarTimes(jogo: Jogo, indice: number) {
    jogo.time1 = new Time();
    jogo.time2 = new Time();

    switch (indice) {
      case 4:
        jogo.time1.nome = 'Venc. Jogo 1';
        jogo.time2.nome = 'Venc. Jogo 2';
        break;
      case 5:
        jogo.time1.nome = 'Venc. Jogo 3';
        jogo.time2.nome = 'Venc. Jogo 4';
        break;
      case 6:
        jogo.time1.nome = 'Perd. Jogo 4';
        jogo.time2.nome = 'Perd. Jogo 5';
        break;
      case 7:
        jogo.time1.nome = 'Venc. Jogo 4';
        jogo.time2.nome = 'Venc. Jogo 5';
        break;
    }
  }

  gravar() {
    const times = [...this.destino];
    const situacao: Situacao = new Situacao('', 1);
    const novos: Array<Jogo> = [];
    while (times.length > 0) {
      const jogo: Jogo = new Jogo();
      jogo.situacao = situacao;
      jogo.time1 = times.shift();
      jogo.time2 = times.shift();
      novos.push(jogo);
    }

    this.jogoSvc.genJogosByModalidade(this.selecionada, novos).then(jogos => {
      this.mostrarTimes = false;
      this.mostrarTabela = true;
      this.ajustarJogos(jogos);
    });
  }

  recarregar() {
    this.origem = [...this.times];
    this.destino = [];
  }

  moveToTarget(e) {
    const items = e.items;
    let ajustar = false;

    while (this.destino.length > 8) {
      ajustar = true;
      const time = items.pop();
      const index = this.destino.indexOf(time);
      this.destino = this.destino.filter((val, i) => i !== index);
    }

    if (ajustar) {
      this.origem = [...this.times];
      this.origem = this.origem.filter((value) => this.destino.indexOf(value) === -1);
    }
  }

  finalizar() {
    this.placares.map((placar) => {
      console.log(placar);
      console.log(placar.valido);
    })
  }

}
