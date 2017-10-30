import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PanelModule, MenuItem, Message, ConfirmationService, DropdownModule, SelectItem, StepsModule, CheckboxModule, PickListModule } from 'primeng/primeng';
import { ModalidadeService } from '../../services/modalidade.service';
import { FaseService } from '../../services/fase.service';
import { Modalidade } from '../../models/modalidade';
import { Fase } from '../../models/fase';
import { TimeService } from '../../services/time.service';
import { Time } from '../../models/time';
import { JogoService } from '../../services/jogo.service';
import { Jogo } from '../../models/jogo';

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
  mostrarTimes: boolean;
  mostrarTabela: boolean;

  constructor(
    private modalidadeSvc: ModalidadeService,
    private faseSvc: FaseService,
    private confirmationService: ConfirmationService,
    private timeSvc: TimeService,
    private jogoSvc: JogoService) {
    this.loadModalidades();
  }

  ngOnInit() {
    this.items = [];
    this.loadTimes();
  }

  private loadTimes() {
    this.times = [];
    this.origem = [];
    this.destino = [];
    this.timeSvc.getTimes().then(times => {
      this.times = times
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
    let id = e.value.id;
    if (id == null) return;

    this.faseSvc.getFasesByModalidadeId(id).then(fases => {
      this.fases = fases;
      fases.forEach(fase => {
        this.items.push({ label: fase.nome });
      });

      this.loadJogos();
    });
  }

  loadJogos() {
    this.mostrarTimes = false;
    this.mostrarTabela = false;
    this.jogoSvc.getJogosByFaseId(this.fases[0].id).then(jogos => {
      if (jogos.length == 0) {
        this.origem = [...this.times];
        this.destino = [];
        this.mostrarTimes = true;
      } else {
        this.mostrarTabela = true;
      }
    });
  }

  gravar() {
    console.log(this.destino);
  }

  recarregar() {
    this.origem = [...this.times];
    this.destino = [];
  }

  moveToTarget(e) {
    let items = e.items;
    let ajustar = false;

    while (this.destino.length > 8) {
      ajustar = true;
      let time = items.pop();
      let index = this.destino.indexOf(time);
      this.destino = this.destino.filter((val, i) => i != index);
    }

    if (ajustar) {
      this.origem = [...this.times];
      this.origem = this.origem.filter((value) => this.destino.indexOf(value) == -1);
    }
  }

}
