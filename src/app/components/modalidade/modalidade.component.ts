import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/primeng';
import { ModalidadeService } from '../../services/modalidade.service';
import { Modalidade } from '../../models/modalidade';

@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.component.html',
  styleUrls: ['./modalidade.component.css'],
  providers: [ModalidadeService]
})
export class ModalidadeComponent implements OnInit {

  modalidades: Modalidade[];
  mostrarDialogo: boolean;
  modalidade: Modalidade = new Modalidade();
  selecionado: Modalidade;
  novoModalidade: boolean;

  constructor(private modalidadeSvc: ModalidadeService) { }

  ngOnInit() {
    this.modalidadeSvc.getModalidades().then(modalidades => {
      this.modalidades = modalidades
    });
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
    this.modalidadeSvc.delModalidade(this.modalidade).then(() => {
      let index = this.procurarModalidadeSelecionado();
      this.modalidades = this.modalidades.filter((val, i) => i != index);
      this.modalidade = null;
      this.mostrarDialogo = false;
    });
  }

  onRowSelect(event) {
    this.novoModalidade = false;
    this.modalidade = this.clonarModalidade(event.data);
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
