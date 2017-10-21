import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Base } from './base';
import { Time } from '../models/time';


const BASE = 'time/';

@Injectable()
export class TimeService extends Base {

  constructor(private http: Http) {
    super();
  }

  public getTimes() {
    return this.http.get(this.getUrlBase().concat(BASE))
      .toPromise()
      .then(res => {
        return <Time[]>res.json()
      });
  }

  public addTime(time: Time) {
    return this.http.post(this.getUrlBase().concat(BASE), time)
      .toPromise()
      .then(res => <Time>res.json());
  }

  public updTime(time: Time) {
    return this.http.put(this.getUrlBase().concat(BASE).concat(String(time.id)), time)
      .toPromise()
      .then(res => <Time>res.json());
  }

  public delTime(time: Time) {
    return this.http.delete(this.getUrlBase().concat(BASE).concat(String(time.id)))
      .toPromise()
      .then();
  }

}
