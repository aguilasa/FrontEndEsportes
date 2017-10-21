import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Base } from './base';
import { Situacao } from '../models/situacao';


const BASE = 'situacao/';

@Injectable()
export class SituacaoService extends Base {

  constructor(private http: Http) {
    super();
  }

  public getSituacaos() {
    return this.http.get(this.getUrlBase().concat(BASE))
      .toPromise()
      .then(res => {
        return <Situacao[]>res.json()
      });
  }

  public addSituacao(situacao: Situacao) {
    return this.http.post(this.getUrlBase().concat(BASE), situacao)
      .toPromise()
      .then(res => <Situacao>res.json());
  }

  public updSituacao(situacao: Situacao) {
    return this.http.put(this.getUrlBase().concat(BASE).concat(String(situacao.id)), situacao)
      .toPromise()
      .then(res => <Situacao>res.json());
  }

  public delSituacao(situacao: Situacao) {
    return this.http.delete(this.getUrlBase().concat(BASE).concat(String(situacao.id)))
      .toPromise()
      .then();
  }

}
