import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { VehicleMakePage } from '../vehicle-make/vehicle-make';
import { VehiclemodelPage } from '../vehiclemodel/vehiclemodel';
import { VehiclecolorPage } from '../vehiclecolor/vehiclecolor';
import { VehicletypePage } from '../vehicletype/vehicletype';
import { ServicelogProvider } from '../../providers/servicelog/servicelog';
/**
 * Generated class for the RegisterVehiclePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register-vehicle',
  templateUrl: 'register-vehicle.html',
})
export class RegisterVehiclePage {

  model:string;
  make:string;
  bodyColor:string;
  bodyType:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events,public serviceLog:ServicelogProvider) {
    events.subscribe('model:selected',(make,model)=>{
      this.make=make;
      this.model=model;
    });

    events.subscribe('vehicle:color',(color)=>{
      this.bodyColor=color;
    });

    events.subscribe('vehicle:type',(type)=>{
      this.bodyType=type;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterVehiclePage');
  }

  showmake()
  {
    this.navCtrl.push(VehicleMakePage);
  }

  showmodel()
  {  
    if(this.make==null)
      this.navCtrl.push(VehicleMakePage);
    else
      this.navCtrl.push(VehiclemodelPage,{vehicleID:this.make});
  }

  showcolor()
  {
    this.navCtrl.push(VehiclecolorPage);
  }

  showbodytype()
  {
    this.navCtrl.push(VehicletypePage);
  }

  saveData()
  {    
    alert(this.serviceLog.getData());
  }
}
