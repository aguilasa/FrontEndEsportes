import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PanelModule, MenuItem, Message, ConfirmationService, DropdownModule, SelectItem, StepsModule, CheckboxModule, PickListModule } from 'primeng/primeng';
import { ModalidadeService } from '../../services/modalidade.service';
import { FaseService } from '../../services/fase.service';
import { Modalidade } from '../../models/modalidade';
import { Fase } from '../../models/fase';
import { TimeService } from '../../services/time.service';
import { Time } from '../../models/time';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css'],
  providers: [ModalidadeService, FaseService, TimeService, ConfirmationService],
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

  constructor(
    private modalidadeSvc: ModalidadeService,
    private faseSvc: FaseService,
    private confirmationService: ConfirmationService,
    private timeSvc: TimeService) {
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
    this.origem = [...this.times];
    this.destino = [];
  }

}
