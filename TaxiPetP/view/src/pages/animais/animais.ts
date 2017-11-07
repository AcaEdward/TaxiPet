import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnimaisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animais',
  templateUrl: 'animais.html',
})
export class AnimaisPage {

  public items;
  public gambiarra;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.gambiarra = [
      {title: 'Nome', especie:'Espécie', raca: "Raça" , description: 'test1'},
      {title: 'Carlos',especie:'pikachu', raca: "non evolvit" , description: 'test2'},
      {title: 'Mike', especie:'pikachu', raca: "non evolvit" ,description: 'test3'}
    ];
       this.items = [
         {title: 'Bob', especie:'pikachu', raca: "non evolvit" , description: 'test1'},
         {title: 'Carlos',especie:'pikachu', raca: "non evolvit" , description: 'test2'},
         {title: 'Mike', especie:'pikachu', raca: "non evolvit" ,description: 'test3'}
       ];
    console.log('ionViewDidLoad AnimaisPage');
  }
  createEntry(){

  }

}
