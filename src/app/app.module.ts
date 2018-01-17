import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { IonicStorageModule, Storage} from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { SQLite } from '@ionic-native/sqlite';
import { NativeStorage }  from '@ionic-native/native-storage';

//import { Items } from '../mocks/providers/items';
//import { Settings, User, Api } from '../providers/providers';

import { SqLitePage} from '../pages/sqlite/sqlite';
import {TabsPage} from '../pages/tabs/tabs';
import {NativeStoragePage} from '../pages/native-storage/native-storage';

 

// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

/*export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  /*return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}*/

 /*providers: [
  StatusBar,
  SplashScreen,
  Storage,
  SQLite,
  { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
  */
  
@NgModule({
  declarations: [
    MyApp,
    NativeStoragePage,
    SqLitePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
         
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NativeStoragePage,
    SqLitePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    SQLite,        
       // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})

export class AppModule {}  