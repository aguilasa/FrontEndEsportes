import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Base } from './base';
import { Tipo } from '../models/tipo';


const BASE = 'tipo/';

@Injectable()
export class TipoService extends Base {

  constructor(private http: Http) {
    super();
  }

  public getTipos() {
    return this.http.get(this.getUrlBase().concat(BASE))
      .toPromise()
      .then(res => {
        return <Tipo[]>res.json()
      });
  }

  public addTipo(tipo: Tipo) {
    return this.http.post(this.getUrlBase().concat(BASE), tipo)
      .toPromise()
      .then(res => <Tipo>res.json());
  }

  public updTipo(tipo: Tipo) {
    return this.http.put(this.getUrlBase().concat(BASE).concat(String(tipo.id)), tipo)
      .toPromise()
      .then(res => <Tipo>res.json());
  }

  public delTipo(tipo: Tipo) {
    return this.http.delete(this.getUrlBase().concat(BASE).concat(String(tipo.id)))
      .toPromise()
      .then();
  }

}
