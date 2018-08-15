import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LogMaintinancePage } from '../pages/log-maintinance/log-maintinance';
import { RegisterMilagePage } from '../pages/register-milage/register-milage';
import { RegisterVehiclePage } from '../pages/register-vehicle/register-vehicle';
import { ReportsPage } from '../pages/reports/reports';
import { SettingsPage } from '../pages/settings/settings';
import { VehicleMakePage } from '../pages/vehicle-make/vehicle-make';
import { VehiclemodelPage } from '../pages/vehiclemodel/vehiclemodel';
import { VehicletypePage } from '../pages/vehicletype/vehicletype';
import { VehiclecolorPage } from '../pages/vehiclecolor/vehiclecolor';
import { ServicetypeselectorPage } from '../pages/servicetypeselector/servicetypeselector';
import { ServiceselectorPage } from '../pages/serviceselector/serviceselector';
import { ServicelogProvider } from '../providers/servicelog/servicelog';
import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogMaintinancePage,
    RegisterMilagePage,
    RegisterVehiclePage,
    VehicleMakePage,
    VehiclemodelPage,
    ReportsPage,
    SettingsPage,
    VehicletypePage,
    VehiclecolorPage,
    ServicetypeselectorPage,
    ServiceselectorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogMaintinancePage,
    RegisterMilagePage,
    RegisterVehiclePage,
    VehicleMakePage,
    VehiclemodelPage,
    ReportsPage,
    SettingsPage,
    VehicletypePage,
    VehiclecolorPage,
    ServicetypeselectorPage,
    ServiceselectorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServicelogProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicelogProvider
  ]
})
export class AppModule {}
