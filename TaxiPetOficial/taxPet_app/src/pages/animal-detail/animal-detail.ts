import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions} from "@angular/http";
import {Cart} from "../../providers/cart";
import {AnimalListPage} from "../animal-list/animal-list";
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the AnimalDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-animal-detail',
  templateUrl: 'animal-detail.html'
})
export class AnimalDetailPage {
  public animal = null;
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: Http,
      public cart:Cart
  ) {}

  ionViewDidLoad() {
    let headers = new Headers();
    headers.set('Authorization', `Bearer ${window.localStorage['token']}`);
    let requestOptions = new RequestOptions({headers});
    this.http.get(`http://localhost:8000/api/animais/${this.navParams.get('id')}`, requestOptions)
        .toPromise().then((response) => {
      this.animal = response.json();
    })
  }

  addToCart(){
    this.cart.addItem(this.animal);
    this.navCtrl.setRoot(AnimalListPage);
  }

}
