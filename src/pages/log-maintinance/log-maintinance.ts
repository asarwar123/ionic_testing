import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { ServicetypeselectorPage } from '../servicetypeselector/servicetypeselector';

/**
 * Generated class for the LogMaintinancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-maintinance',
  templateUrl: 'log-maintinance.html',
})
export class LogMaintinancePage {

  serviceName: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events) {

    this.events.subscribe('service:selected',(servicename)=>{
      this.serviceName = servicename;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogMaintinancePage');
  }

  selectservice()
  {
    this.navCtrl.push(ServicetypeselectorPage);
  }
}
