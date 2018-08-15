import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the VehicletypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicletype',
  templateUrl: 'vehicletype.html',
})
export class VehicletypePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehicletypePage');
  }

  selecttype(type)
  {
    this.events.publish("vehicle:type",type);
    this.navCtrl.pop();
  }
}
