import { Nav, Platform } from 'ionic-angular';
import { Component, ViewChild } from '@angular/core';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {LoginPage} from "../pages/login/login";
import {MyCartPage} from "../pages/my-cart/my-cart";
import { AnimalListPage } from '../pages/animal-list/animal-list';
import {ProductListPage} from "../pages/product-list/product-list";
import { AnimalCreatePage } from '../pages/animal-create/animal-create';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Animais', component: AnimalListPage },
      { title: 'Meu carrinho', component: MyCartPage },
      { title: 'Serviços', component: ProductListPage },
      { title: 'Cadastrar Animais', component: AnimalCreatePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
