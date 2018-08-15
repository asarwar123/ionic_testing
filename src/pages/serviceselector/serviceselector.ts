import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the ServiceselectorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-serviceselector',
  templateUrl: 'serviceselector.html',
})
export class ServiceselectorPage {
  servicesid = null;
  serviecs: Array<{name:string,categoryid:number}>;
  filteredServices: Array<{name:string,categoryid:number}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public events:Events) {

    this.servicesid = navParams.get('serviceid');

    this.serviecs=[
      { name: '1K Services',categoryid: 1},
      { name: '3K Services',categoryid: 1},
      { name: '5K Services',categoryid: 1},
      { name: '10K Services',categoryid: 1},
      { name: '20K Services',categoryid: 1},
      { name: '40K Services',categoryid: 1},
      { name: '80K Services',categoryid: 1},
      { name: '100K Services',categoryid: 1},
      { name: 'Oil Change Services',categoryid: 1},
      { name: 'Oil & Air Filter Change Services',categoryid: 1},
      { name: 'Brake shoe Change',categoryid: 2},
      { name: 'Brake Disc Change',categoryid: 2},
      { name: 'Headlight Change',categoryid: 2},
      { name: 'Tyre Change',categoryid: 2},
      { name: 'Spark Plugs Change',categoryid: 2},
      { name: 'Mechanical Work',categoryid: 3},
      { name: 'Electrical Work',categoryid: 3},
      { name: 'Others',categoryid: 4}    
    ]

    this.filteredServices=this.serviecs.filter(services=>services.categoryid==this.servicesid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceselectorPage');
  }

  ServiceSelected(service)
  {
    this.events.publish('service:selected',service.name);
    this.navCtrl.remove(2);
  }
}
