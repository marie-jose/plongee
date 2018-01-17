import { SqLitePage } from './sqlite';

@NgModule({
  declarations: [
    SqLitePage,
  ],
  imports: [
    IonicPageModule.forChild(SqLitePage),
    TranslateModule.forChild()
  ],
  exports: [
    SqLitePage
  ]
})
export class SqLitePageModule {}
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
