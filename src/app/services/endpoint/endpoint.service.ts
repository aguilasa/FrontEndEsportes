import { Injectable } from '@angular/core';

const URL = 'http://localhost:8000/';

@Injectable()
export class EndpointService {

  constructor() { }

  public getUrlBase(): string {
    return URL;
  }

}
