import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CadastroPage } from '../cadastro/cadastro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // public feeds: Array<string>;
  // private url: string = "api/test.json";
  private url: string;
  // private url: string = "https://www.reddit.com/new.json";

  constructor(public navCtrl: NavController, public http: Http) {
    this.url  = "img/logo.jpg";
 //
 //    this.http.get(this.url).map(res => res.json()).subscribe(data => {
 //        this.feeds = data.data.children;
 //    });
  }
  goToLogin() {
  //push another page onto the history stack
  //causing the nav controller to animate the new page in
  this.navCtrl.push(CadastroPage);
}


}
