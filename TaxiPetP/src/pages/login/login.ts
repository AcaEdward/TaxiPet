import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { UhuPage } from '../uhu/uhu';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
constructor(
public navCtrl: NavController,
public http: Http,
){}
goToLogadoStrub(){
  this.navCtrl.push(UhuPage);
}
}
