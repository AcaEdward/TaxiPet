import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { CadastroPage } from '../cadastro/cadastro';
import { LoginPage } from '../login/login';

import { Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private url: string;

  constructor(
    public navCtrl: NavController,
    public http: Http,
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController
  ) {
    this.url  = "img/logo.jpg";
  }

  goToCadastro() {
    this.navCtrl.push(CadastroPage);
  }

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Tipo de cadastro',
      //cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Motorista',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('cadastro motora');
            this.goToCadastro();
          }
        },
        {
          text: 'Cliente',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('cadastro cliente');
          }
        }/*,
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }*/
      ]
    });
    actionSheet.present();
}

}
