import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Base } from './base';
import { Modalidade } from '../models/modalidade';


const BASE = 'modalidade/';

@Injectable()
export class ModalidadeService extends Base {

  constructor(private http: Http) {
    super();
  }

  public getModalidades() {
    return this.http.get(this.getUrlBase().concat(BASE))
      .toPromise()
      .then(res => {
        return <Modalidade[]>res.json()
      });
  }

  public addModalidade(modalidade: Modalidade) {
    return this.http.post(this.getUrlBase().concat(BASE), modalidade)
      .toPromise()
      .then(res => <Modalidade>res.json());
  }

  public updModalidade(modalidade: Modalidade) {
    return this.http.put(this.getUrlBase().concat(BASE).concat(String(modalidade.id)), modalidade)
      .toPromise()
      .then(res => <Modalidade>res.json());
  }

  public delModalidade(modalidade: Modalidade) {
    return this.http.delete(this.getUrlBase().concat(BASE).concat(String(modalidade.id)))
      .toPromise()
      .then();
  }

}
