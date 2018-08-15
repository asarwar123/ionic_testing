import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleMakePage } from './vehicle-make';

@NgModule({
  declarations: [
    VehicleMakePage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleMakePage),
  ],
})
export class VehicleMakePageModule {}
