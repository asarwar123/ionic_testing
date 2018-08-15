import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegisterVehiclePage } from '../pages/register-vehicle/register-vehicle';
import { RegisterMilagePage } from '../pages/register-milage/register-milage';
import { LogMaintinancePage } from '../pages/log-maintinance/log-maintinance';
import { SettingsPage } from '../pages/settings/settings';
import { ReportsPage } from '../pages/reports/reports';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Add Vehicle', component: RegisterVehiclePage },
      { title: 'Add Milage', component: RegisterMilagePage },
      { title: 'Log Maintinance', component: LogMaintinancePage },
      { title: 'Reports', component: ReportsPage },
      { title: 'settings', component: SettingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.nav.setRoot(page.component);
    this.nav.push(page.component);    
  }
}
