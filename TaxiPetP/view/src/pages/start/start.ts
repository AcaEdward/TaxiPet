import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CorridaPage } from '../corrida/corrida';
import { Animais2Page } from '../animais2/animais2';
import { PetPage } from '../pet/pet';


/**
 * Generated class for the UhuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class startPage {
  private url: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.url  = "img/bt.png";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad startPage');
  }
  paginacorrida(){
    this.navCtrl.push(CorridaPage);
  }
  PaginaAnimais(){
    this.navCtrl.push(Animais2Page);
  }
  paginaPetshops(){
    this.navCtrl.push(PetPage);
  }

}
