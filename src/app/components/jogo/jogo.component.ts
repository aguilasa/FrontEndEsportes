import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css'],
  providers: [ModalidadeService, FaseService, TimeService, JogoService, ConfirmationService],
  encapsulation: ViewEncapsulation.None
})
export class JogoComponent implements OnInit {

  modalidades: SelectItem[];
  selecionada: Modalidade;
  items: MenuItem[];
  fases: Fase[];
  times: Time[];
  origem: Time[];
  destino: Time[];
  jogos: Jogo[];
  mostrarTimes: boolean;
  mostrarTabela: boolean;
  fase: Fase;
  indice: number = 0;

  constructor(
    private modalidadeSvc: ModalidadeService,
    private faseSvc: FaseService,
    private confirmationService: ConfirmationService,
    private timeSvc: TimeService,
    private jogoSvc: JogoService) {
    this.loadModalidades();
  }

  ngOnInit() {
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
        this.fase = this.fases[0];
        this.loadJogos();
      }
    });
  }

  loadJogos() {
    this.jogos = [];
    this.mostrarTimes = false;
    this.mostrarTabela = false;
    this.jogoSvc.getJogosByFase(this.fase).then(jogos => {
      if (jogos.length === 0) {
        this.origem = [...this.times];
        this.destino = [];
        this.mostrarTimes = true;
      } else {
        this.mostrarTabela = true;
        this.jogos = jogos;
      }
    });
  }

  gravar() {
    const times = [...this.destino];
    const situacao: Situacao = new Situacao('', 1);
    this.jogos = [];
    while (times.length > 0) {
      const jogo: Jogo = new Jogo();
      jogo.fase = this.fase;
      jogo.situacao = situacao;
      jogo.time1 = times.shift();
      jogo.time2 = times.shift();
      this.jogos.push(jogo);
    }

    this.jogoSvc.genJogosByModalidade(this.selecionada, this.jogos).then(jogos => {
      this.mostrarTimes = false;
      this.mostrarTabela = true;
      this.jogos = jogos;
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

}
