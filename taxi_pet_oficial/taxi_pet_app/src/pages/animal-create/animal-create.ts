import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {AnimalDetailPage} from "../animal-detail/animal-detail";
/*
  Generated class for the ProductList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-animal-create',
  templateUrl: 'animal-create.html'
})
export class AnimalCreatePage {
  public animais = [];
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public http: Http
  ) {}

  ionViewDidLoad() {
    let headers = new Headers();
    headers.set('Authorization', `Bearer ${window.localStorage['token']}`);
    let requestOptions = new RequestOptions({headers});
    this.http.post('http://localhost:8000/api/animais/incluir', {
        "nome": "Rex",
        "raca": "Pastor Alemão",
        "especie": "Cão"
    }, requestOptions)
        .toPromise().then((response) => {
      this.animais = response.json();
    });
  }

  goToAnimalDetail(animal){
    this.navCtrl.push(AnimalDetailPage, {id: animal.id})
  }

}
