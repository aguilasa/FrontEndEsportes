import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { TipoModel } from '../../models/tipo/tipo-model';

import { EndpointService } from '../endpoint/endpoint.service';

const BASE = 'tipo/';

@Injectable()
export class TipoService {

  constructor(private http: Http, private ep: EndpointService) { }

  private getUrlBase(): string {
    return this.ep.getUrlBase() + BASE;
  }

  public addTipo(tipo: TipoModel) {
    return this.http.post(this.getUrlBase(), tipo)
      .map(() => "");
  }

  public getTipos() {
    return this.http.get(this.getUrlBase())
      .map(res => {
        return res.json();
      });
  }



}
