import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PanelModule, MenuItem, Message, ConfirmationService, DropdownModule, SelectItem, StepsModule, CheckboxModule } from 'primeng/primeng';
import { ModalidadeService } from '../../services/modalidade.service';
import { FaseService } from '../../services/fase.service';
import { Modalidade } from '../../models/modalidade';
import { Fase } from '../../models/fase';


@Component({
  selector: 'app-fase',
  templateUrl: './fase.component.html',
  styleUrls: ['./fase.component.css'],
  providers: [ModalidadeService, FaseService, ConfirmationService],
  encapsulation: ViewEncapsulation.None
})
export class FaseComponent implements OnInit {

  modalidades: SelectItem[];
  selecionada: Modalidade;
  items: MenuItem[];
  fases: Fase[];

  constructor(private modalidadeSvc: ModalidadeService, private faseSvc: FaseService, private confirmationService: ConfirmationService) {
    this.loadModalidades();
  }

  ngOnInit() {
    this.items = [];
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

  onChange(e) {
    this.fases = [];
    this.items = [];
    let id = e.value.id;
    if (id == null) return;

    this.faseSvc.getFasesByModalidadeId(id).then(fases => {
      this.fases = fases;
      fases.forEach(fase => {
        this.items.push({ label: fase.nome });
      });
    });
  }

  clickGerar() {
    if (this.fases.length > 0) {
      this.confirmationService.confirm({
        message: 'Deseja regerar as fases?',
        accept: () => {
          this.gerar();
        }
      });
    } else {
      this.gerar();
    }
  }

  gerar() {
    let id = this.selecionada ? this.selecionada.id : null;
    if (id == null) return;

    this.fases = [];
    this.items = [];
    this.faseSvc.genFasesByModalidadeId(id).then(fases => {
      this.fases = fases;
      fases.forEach(fase => {
        this.items.push({ label: fase.nome });
      });
    });
  }

}
