import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Base } from './base';
import { Jogo } from '../models/jogo';
import { Fase } from '../models/fase';
import { Modalidade } from '../models/modalidade';

const BASE = 'jogo/';

@Injectable()
export class JogoService extends Base {

  constructor(private http: Http) {
    super();
  }

  public getJogosByFase(fase: Fase) {
    return this.http.get(this.getUrlBase().concat(BASE).concat('fase/').concat(String(fase.id)))
      .toPromise()
      .then(res => {
        return <Jogo[]>res.json();
      });
  }

  public getJogosByModalidade(modalidade: Modalidade) {
    return this.http.get(this.getUrlBase().concat(BASE).concat('modalidade/').concat(String(modalidade.id)))
      .toPromise()
      .then(res => {
        return <Jogo[]>res.json();
      });
  }

  public genJogosByModalidade(modalidade: Modalidade, jogos: Array<Jogo>) {
    return this.http.post(this.getUrlBase().concat(BASE).concat('modalidade/').concat(String(modalidade.id)), jogos)
      .toPromise()
      .then(res => {
        return <Jogo[]>res.json();
      });
  }

  public addJogo(jogo: Jogo) {
    return this.http.post(this.getUrlBase().concat(BASE), jogo)
      .toPromise()
      .then(res => <Jogo>res.json());
  }

  public updJogo(jogo: Jogo) {
    return this.http.put(this.getUrlBase().concat(BASE).concat(String(jogo.id)), jogo)
      .toPromise()
      .then(res => <Jogo>res.json());
  }

  public delJogo(jogo: Jogo) {
    return this.http.delete(this.getUrlBase().concat(BASE).concat(String(jogo.id)))
      .toPromise()
      .then();
  }

}
