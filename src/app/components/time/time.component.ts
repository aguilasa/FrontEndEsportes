import { Component, OnInit } from '@angular/core';
import { PanelModule } from 'primeng/primeng';
import { TimeService } from '../../services/time.service';
import { Time } from '../../models/time';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css'],
  providers: [TimeService]
})
export class TimeComponent implements OnInit {

  times: Time[];
  mostrarDialogo: boolean;
  time: Time = new Time();
  selecionado: Time;
  novoTime: boolean;

  constructor(private timeSvc: TimeService) { }

  ngOnInit() {
    this.timeSvc.getTimes().then(times => {
      this.times = times
    });
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
    this.timeSvc.delTime(this.time).then(() => {
      let index = this.procurarTimeSelecionado();
      this.times = this.times.filter((val, i) => i != index);
      this.time = null;
      this.mostrarDialogo = false;
    });
  }

  onRowSelect(event) {
    this.novoTime = false;
    this.time = this.clonarTime(event.data);
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
