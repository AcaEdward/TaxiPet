import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { NavController } from 'ionic-angular';
import { UhuPage } from '../uhu/uhu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  constructor(
    public navCtrl: NavController,
  ){}
  goToLogadoStrub(){
    this.navCtrl.push(UhuPage);
  }
}
