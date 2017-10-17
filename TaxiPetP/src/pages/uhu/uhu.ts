import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UhuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-uhu',
  templateUrl: 'uhu.html',
})
export class UhuPage {
  private url: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.url  = "img/bt.png";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UhuPage');
  }

}
