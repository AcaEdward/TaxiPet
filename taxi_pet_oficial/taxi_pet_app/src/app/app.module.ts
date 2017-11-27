import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';
import {ProductListPage} from "../pages/product-list/product-list";
import {ProductDetailPage} from "../pages/product-detail/product-detail";
import {LoginPage} from "../pages/login/login";
import {MyCartPage} from "../pages/my-cart/my-cart";
import {CheckoutPage} from "../pages/checkout/checkout";
import {Cart} from "../providers/cart";
import {AnimalListPage} from "../pages/animal-list/animal-list";
import {AnimalDetailPage} from "../pages/animal-detail/animal-detail";
import {AnimalCreatePage} from "../pages/animal-create/animal-create";

@NgModule({
    declarations: [
        MyApp,
        Page1,
        Page2,
        LoginPage,
        MyCartPage,
        CheckoutPage,
        AnimalListPage,
        ProductListPage,
        AnimalDetailPage,
        AnimalCreatePage,
        ProductDetailPage
    ],
    imports: [
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        Page1,
        Page2,
        LoginPage,
        MyCartPage,
        CheckoutPage,
        AnimalListPage,
        ProductListPage,
        AnimalDetailPage,
        AnimalCreatePage,
        ProductDetailPage,
    ],
    providers: [
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        Cart
    ]
})
export class AppModule {
}
