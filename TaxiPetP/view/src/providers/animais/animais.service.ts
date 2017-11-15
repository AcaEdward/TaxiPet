import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AnimaisPage } from '../../pages/animais/animais';

/*
  Generated class for the AnimaisProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AnimaisProvider {

  constructor(private http: Http) { }

}
