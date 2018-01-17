import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NativeStoragePage } from '../native-storage/native-storage';
import { SqLitePage } from '../sqlite/sqlite';



@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = NativeStoragePage;
  tab2Root: any = SqLitePage;
  
    constructor(public navCtrl: NavController,
                public translateService: TranslateService) {
   /* translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
      
    });*/
  }
}
