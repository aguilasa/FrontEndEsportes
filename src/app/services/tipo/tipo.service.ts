import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { EndpointService } from '../endpoint/endpoint.service';

const BASE = 'tipo/';

@Injectable()
export class TipoService {

  constructor(private http: Http, private ep: EndpointService) { }

  private getUrlBase(): string {
    return this.ep.getUrlBase() + BASE;
  }

  public getTipos() {
    return this.http.get(this.getUrlBase())
      .map(res => {
        return res.json();
      });
  }



}
