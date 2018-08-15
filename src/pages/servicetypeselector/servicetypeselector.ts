import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceselectorPage } from '../serviceselector/serviceselector';

/**
 * Generated class for the ServicetypeselectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicetypeselector',
  templateUrl: 'servicetypeselector.html',
})
export class ServicetypeselectorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicetypeselectorPage');
  }

  selectservice(id)
  {
    this.navCtrl.push(ServiceselectorPage,{serviceid : id});
  }
}
