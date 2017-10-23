import { Component, OnInit } from '@angular/core';
import { PanelModule, MenuItem, Message, ConfirmationService } from 'primeng/primeng';
import { ModalidadeService } from '../../services/modalidade.service';
import { Modalidade } from '../../models/modalidade';

@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.component.html',
  styleUrls: ['./modalidade.component.css'],
  providers: [ModalidadeService, ConfirmationService]
})
export class ModalidadeComponent implements OnInit {

  items: MenuItem[];
  modalidades: Modalidade[];
  mostrarDialogo: boolean;
  modalidade: Modalidade = new Modalidade();
  selecionado: Modalidade;
  novoModalidade: boolean;

  constructor(private modalidadeSvc: ModalidadeService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.modalidadeSvc.getModalidades().then(modalidades => {
      this.modalidades = modalidades
    });

    this.items = [
      { label: 'Visualizar', icon: 'fa-search', command: (event) => this.mostrar(this.selecionado) },
      { label: 'Excluir', icon: 'fa-close', command: (event) => this.confirmar() }
    ];
  }

  mostrarDialogoIncluir() {
    this.novoModalidade = true;
    this.modalidade = new Modalidade();
    this.mostrarDialogo = true;
  }

  salvar() {
    let modalidades = [...this.modalidades];

    if (this.novoModalidade) {
      this.modalidadeSvc.addModalidade(this.modalidade).then(res => {
        this.modalidade = res;
        modalidades.push(this.modalidade);
        this.finalizar(modalidades);
      });
    }
    else {
      this.modalidadeSvc.updModalidade(this.modalidade).then(res => {
        let index = this.procurarModalidadeSelecionado();
        this.modalidade = res;
        modalidades[index] = this.modalidade;
        this.finalizar(modalidades);
      });
    }
  }

  private finalizar(modalidades) {
    this.modalidades = modalidades;
    this.modalidade = null;
    this.mostrarDialogo = false;
  }

  deletar() {
    this.modalidadeSvc.delModalidade(this.selecionado).then(() => {
      let index = this.procurarModalidadeSelecionado();
      this.modalidades = this.modalidades.filter((val, i) => i != index);
      this.modalidade = null;
      this.mostrarDialogo = false;
    });
  }

  confirmar() {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja excluir o registro?',
      accept: () => {
        this.deletar();
      }
    });
  }

  onRowSelect(event) {
    this.mostrar(event.data);
  }

  setarModalidade(modalidade: Modalidade) {
    this.novoModalidade = false;
    this.modalidade = this.clonarModalidade(modalidade);
  }

  mostrar(modalidade: Modalidade) {
    this.setarModalidade(modalidade);
    this.mostrarDialogo = true;
  }

  clonarModalidade(t: Modalidade): Modalidade {
    let modalidade = new Modalidade();
    for (let prop in t) {
      modalidade[prop] = t[prop];
    }
    return modalidade;
  }

  procurarModalidadeSelecionado(): number {
    return this.modalidades.indexOf(this.selecionado);
  }

}
