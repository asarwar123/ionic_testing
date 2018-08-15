import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServiceselectorPage } from './serviceselector';

@NgModule({
  declarations: [
    ServiceselectorPage,
  ],
  imports: [
    IonicPageModule.forChild(ServiceselectorPage),
  ],
})
export class ServiceselectorPageModule {}
