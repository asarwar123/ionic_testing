import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicetypeselectorPage } from './servicetypeselector';

@NgModule({
  declarations: [
    ServicetypeselectorPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicetypeselectorPage),
  ],
})
export class ServicetypeselectorPageModule {}
