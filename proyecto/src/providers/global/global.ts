import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {

  public visitante:boolean = false;

  constructor() {
    console.log('Hello GlobalProvider Provider');
  }

}
