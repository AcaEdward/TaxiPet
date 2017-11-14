import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormAddAnimalPage} from '../form-add-animal/form-add-animal';

/**
 * Generated class for the Animais2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animais2',
  templateUrl: 'animais2.html',
})
export class Animais2Page {
  public items;
  public gambiarra;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    this.gambiarra = [
      { title: 'Nome', especie: 'Espécie', raca: "Raça", description: 'test1' },
      { title: 'Carlos', especie: 'pikachu', raca: "non evolvit", description: 'test2' },
      { title: 'Mike', especie: 'pikachu', raca: "non evolvit", description: 'test3' }
    ];
    this.items = [
      { title: 'Bob', especie: 'cachorro', raca: "vira-lata", description: 'test1' },
      { title: 'Carlos', especie: 'gato', raca: "nao sei", description: 'test2' },
      { title: 'Hantaro', especie: 'camundongo', raca: "NONE", description: 'test3' }
    ];
    console.log('ionViewDidLoad AnimaisPage');
  }
  addItem(){
    this.navCtrl.push(FormAddAnimalPage);
  }

}
