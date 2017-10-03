import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private url: string;

  constructor(public navCtrl: NavController, public http: Http) {
    this.url  = "img/logo.jpg";
  }
  
  goToCadastro() {
    this.navCtrl.push(CadastroPage);
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

}
