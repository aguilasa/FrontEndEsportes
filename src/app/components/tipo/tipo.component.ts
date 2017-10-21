import { Component, OnInit } from '@angular/core';
import { PanelModule, MenuItem, Message, ConfirmationService } from 'primeng/primeng';
import { TipoService } from '../../services/tipo.service';
import { Tipo } from '../../models/tipo';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css'],
  providers: [TipoService, ConfirmationService]
})
export class TipoComponent implements OnInit {

  items: MenuItem[];
  tipos: Tipo[];
  mostrarDialogo: boolean;
  tipo: Tipo = new Tipo();
  selecionado: Tipo;
  novoTipo: boolean;

  constructor(private tipoSvc: TipoService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.tipoSvc.getTipos().then(tipos => {
      this.tipos = tipos
    });

    this.items = [
      { label: 'Visualizar', icon: 'fa-search', command: (event) => this.mostrar(this.selecionado) },
      { label: 'Excluir', icon: 'fa-close', command: (event) => this.confirmar() }
    ];
  }

  mostrarDialogoIncluir() {
    this.novoTipo = true;
    this.tipo = new Tipo();
    this.mostrarDialogo = true;
  }

  salvar() {
    let tipos = [...this.tipos];

    if (this.novoTipo) {
      this.tipoSvc.addTipo(this.tipo).then(res => {
        this.tipo = res;
        tipos.push(this.tipo);
        this.finalizar(tipos);
      });
    }
    else {
      this.tipoSvc.updTipo(this.tipo).then(res => {
        let index = this.procurarTipoSelecionado();
        this.tipo = res;
        tipos[index] = this.tipo;
        this.finalizar(tipos);
      });
    }
  }

  private finalizar(tipos) {
    this.tipos = tipos;
    this.tipo = null;
    this.mostrarDialogo = false;
  }

  deletar() {
    this.tipoSvc.delTipo(this.selecionado).then(() => {
      let index = this.procurarTipoSelecionado();
      this.tipos = this.tipos.filter((val, i) => i != index);
      this.tipo = null;
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

  setarTipo(tipo: Tipo) {
    this.novoTipo = false;
    this.tipo = this.clonarTipo(tipo);
  }

  mostrar(tipo: Tipo) {
    this.setarTipo(tipo);
    this.mostrarDialogo = true;
  }

  clonarTipo(t: Tipo): Tipo {
    let tipo = new Tipo();
    for (let prop in t) {
      tipo[prop] = t[prop];
    }
    return tipo;
  }

  procurarTipoSelecionado(): number {
    return this.tipos.indexOf(this.selecionado);
  }

}
