import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { RegisterVehiclePage } from '../register-vehicle/register-vehicle';

/**
 * Generated class for the VehiclemodelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehiclemodel',
  templateUrl: 'vehiclemodel.html',
})
export class VehiclemodelPage {

  selectedVehicleID = null;

  Model: Array< { model:string, makeid:string }>;
  filterModel: Array< { model:string, makeid:string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events) {
    this.selectedVehicleID = navParams.get('vehicleID');

    this.Model=
    [
      { model:'Corolla', makeid: 'Toyota'},
      { model:'Vitz', makeid: 'Toyota'},
      { model:'Passo', makeid: 'Toyota'},
      { model:'Aqua', makeid: 'Toyota'},
      { model:'Prius', makeid: 'Toyota'},
      { model:'Other', makeid: 'Toyota'},
      { model:'Mehran', makeid: 'Suzuki'},
      { model:'Cultus', makeid: 'Suzuki'},
      { model:'Alto', makeid: 'Suzuki'},
      { model:'Wagon R', makeid: 'Suzuki'},
      { model:'Every', makeid: 'Suzuki'},
      { model:'Other', makeid: 'Suzuki'},
      { model:'Civic', makeid: 'Honda'},
      { model:'City', makeid: 'Honda'},
      { model:'Vezel', makeid: 'Honda'},
      { model:'N Wgn', makeid: 'Honda'},
      { model:'Other', makeid: 'Honda'},
      { model:'Mira', makeid: 'Daihatsu'},
      { model:'Cuore', makeid: 'Daihatsu'},
      { model:'Move', makeid: 'Daihatsu'},
      { model:'Hijet', makeid: 'Daihatsu'},
      { model:'Charade', makeid: 'Daihatsu'},
      { model:'Other', makeid: 'Daihatsu'},
      { model:'Dayz', makeid: 'Nissan'},
      { model:'Dayz Highway Star', makeid: 'Nissan'},
      { model:'Clipper', makeid: 'Nissan'},
      { model:'Sunny', makeid: 'Nissan'},
      { model:'Juke', makeid: 'Nissan'},
      { model:'Other', makeid: 'Nissan'},
      { model:'7 Series', makeid: 'BMW'},
      { model:'3 Series', makeid: 'BMW'},
      { model:'5 Series', makeid: 'BMW'},
      { model:'X5 Series', makeid: 'BMW'},
      { model:'X1', makeid: 'BMW'},
      { model:'X-PV', makeid: '6'},
      { model:'V2', makeid: '6'},
      { model:'Carrier', makeid: '6'},
      { model:'Sirius', makeid: '6'},
      { model:'Other', makeid: '6'},
      { model:'Santro', makeid: 'Hyundai'},
      { model:'Excel', makeid: 'Hyundai'},
      { model:'Shehzore', makeid: 'Hyundai'},
      { model:'Other', makeid: 'Hyundai'},
      { model:'Terracan', makeid: 'Hyundai'},
      { model:'Other', makeid: 'Hyundai'}    
    ]

    this.filterModel = this.Model.filter(models => models.makeid == this.selectedVehicleID);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclemodelPage');
  }

  ModelSelected(vmodel)
  {
    this.events.publish('model:selected',vmodel.makeid,vmodel.model);
    this.navCtrl.remove(2);
  }
}
