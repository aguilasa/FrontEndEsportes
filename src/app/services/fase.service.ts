import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Base } from './base';
import { Fase } from '../models/fase';

const BASE = 'fase/';

@Injectable()
export class FaseService extends Base {

  constructor(private http: Http) {
    super();
  }

  public getFasesByModalidadeId(id: number) {
    return this.http.get(this.getUrlBase().concat(BASE).concat('modalidade/').concat(String(id)))
      .toPromise()
      .then(res => {
        return <Fase[]>res.json()
      });
  }

}
