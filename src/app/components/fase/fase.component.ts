import { Component, OnInit } from '@angular/core';
import { PanelModule, MenuItem, Message, ConfirmationService, DropdownModule, SelectItem } from 'primeng/primeng';
import { ModalidadeService } from '../../services/modalidade.service';
import { Modalidade } from '../../models/modalidade';


@Component({
  selector: 'app-fase',
  templateUrl: './fase.component.html',
  styleUrls: ['./fase.component.css'],
  providers: [ModalidadeService, ConfirmationService]
})
export class FaseComponent implements OnInit {

  modalidades: SelectItem[];
  modalidadeSelecionada: any;

  constructor(private modalidadeSvc: ModalidadeService) {
    this.loadModalidades();
  }

  ngOnInit() {

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
    console.log(this.modalidadeSelecionada);
    console.log(e.value);
  }

  onBlur() {
    console.log(this.modalidadeSelecionada);
  }

}
