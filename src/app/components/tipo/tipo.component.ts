import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/primeng';
import { TipoService } from '../../services/tipo.service';
import { Tipo } from '../../models/tipo';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css'],
  providers: [TipoService]
})
export class TipoComponent implements OnInit {

  tipos: Tipo[];
  mostrarDialogo: boolean;
  tipo: Tipo = new Tipo();
  selecionado: Tipo;
  novoTipo: boolean;

  constructor(private tipoSvc: TipoService) { }

  ngOnInit() {
    this.tipoSvc.getTipos().then(tipos => {
      this.tipos = tipos
    });
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
    this.tipoSvc.delTipo(this.tipo).then(() => {
      let index = this.procurarTipoSelecionado();
      this.tipos = this.tipos.filter((val, i) => i != index);
      this.tipo = null;
      this.mostrarDialogo = false;
    });
  }

  onRowSelect(event) {
    this.novoTipo = false;
    this.tipo = this.clonarTipo(event.data);
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
