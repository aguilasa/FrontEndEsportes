import { Component, OnInit } from '@angular/core';
import { PanelModule, MenuItem, Message, ConfirmationService } from 'primeng/primeng';
import { TimeService } from '../../services/time.service';
import { Time } from '../../models/time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  providers: [TimeService, ConfirmationService]
})
export class TimeComponent implements OnInit {

  items: MenuItem[];
  times: Time[];
  mostrarDialogo: boolean;
  time: Time = new Time();
  selecionado: Time;
  novoTime: boolean;

  constructor(private timeSvc: TimeService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.timeSvc.getTimes().then(times => {
      this.times = times
    });

    this.items = [
      { label: 'Visualizar', icon: 'fa-search', command: (event) => this.mostrar(this.selecionado) },
      { label: 'Excluir', icon: 'fa-close', command: (event) => this.confirmar() }
    ];
  }

  mostrarDialogoIncluir() {
    this.novoTime = true;
    this.time = new Time();
    this.mostrarDialogo = true;
  }

  salvar() {
    let times = [...this.times];

    if (this.novoTime) {
      this.timeSvc.addTime(this.time).then(res => {
        this.time = res;
        times.push(this.time);
        this.finalizar(times);
      });
    }
    else {
      this.timeSvc.updTime(this.time).then(res => {
        let index = this.procurarTimeSelecionado();
        this.time = res;
        times[index] = this.time;
        this.finalizar(times);
      });
    }
  }

  private finalizar(times) {
    this.times = times;
    this.time = null;
    this.mostrarDialogo = false;
  }

  deletar() {
    this.timeSvc.delTime(this.selecionado).then(() => {
      let index = this.procurarTimeSelecionado();
      this.times = this.times.filter((val, i) => i != index);
      this.time = null;
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

  setarTime(time: Time) {
    this.novoTime = false;
    this.time = this.clonarTime(time);
  }

  mostrar(time: Time) {
    this.setarTime(time);
    this.mostrarDialogo = true;
  }

  clonarTime(t: Time): Time {
    let time = new Time();
    for (let prop in t) {
      time[prop] = t[prop];
    }
    return time;
  }

  procurarTimeSelecionado(): number {
    return this.times.indexOf(this.selecionado);
  }

}
