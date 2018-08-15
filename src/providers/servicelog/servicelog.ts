import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicelogProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicelogProvider {

  constructor(public http: HttpClient,public storage:Storage) {
    console.log('Hello ServicelogProvider Provider');
  }

  getData()
  {
    this.storage.setItem('logservice','This was  test  case for storage');
    return this.storage.getItem('logservice');
  }
}
