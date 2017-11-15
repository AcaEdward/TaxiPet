import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormAddAnimalPage } from './form-add-animal';

@NgModule({
  declarations: [
    FormAddAnimalPage,
  ],
  imports: [
    IonicPageModule.forChild(FormAddAnimalPage),
  ],
})
export class FormAddAnimalPageModule {}
