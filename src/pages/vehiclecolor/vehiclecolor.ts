import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the VehiclecolorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehiclecolor',
  templateUrl: 'vehiclecolor.html',
})
export class VehiclecolorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclecolorPage');
  }

  selectcolor(color)
  {
    this.events.publish("vehicle:color",color);
    this.navCtrl.pop();
  }
}
