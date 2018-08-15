import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VehiclemodelPage } from '../vehiclemodel/vehiclemodel';

/**
 * Generated class for the VehicleMakePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-make',
  templateUrl: 'vehicle-make.html',
})
export class VehicleMakePage {

  Make: Array<{make: string, id: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.Make = [
      { make: 'Audi', id: 'Audi' },
      { make: 'BMW', id: 'BMW' },
      { make: 'Chery', id: 'Chery' },
      { make: 'Chevrolet', id: 'Chevrolet' },
      { make: 'Daihatsu', id: 'Daihatsu' },
      { make: 'FAW', id: 'FAW' },
      { make: 'Honda', id: 'Honda' },
      { make: 'Hyundai', id: 'Hyundai' },
      { make: 'Jaguar', id: 'Jaguar' },
      { make: 'KIA', id: 'KIA' },
      { make: 'Land Rover', id: 'Land Rover' },
      { make: 'Lexus', id: 'Lexus' },
      { make: 'Mercedes Benz', id: 'Mercedes Benz' },
      { make: 'Mitsubishi', id: 'Mitsubishi' },
      { make: 'Nissan', id: 'Nissan' },
      { make: 'Rang Rover', id: 'Rang Rover' },
      { make: 'Suzuki', id: 'Suzuki' },
      { make: 'Toyota', id: 'Toyota' },
      { make: 'Others', id: 'Others'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicleMakePage');
  }

  MakeSelected(vmake)
  {    
    this.navCtrl.push(VehiclemodelPage,{vehicleID:vmake.id}); 
  }
}
