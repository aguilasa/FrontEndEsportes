import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Base } from './base';
import { Time } from '../models/time';

@Injectable()
export class FaseService extends Base {

  constructor(private http: Http) {
    super();
  }

}
