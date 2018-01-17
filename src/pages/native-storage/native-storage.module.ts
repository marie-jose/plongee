import { NativeStoragePage } from './native-storage';

@NgModule({
  declarations: [
    NativeStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(NativeStoragePage),
    TranslateModule.forChild()
  ],
  exports: [
    NativeStoragePage
  ]
})
export class NativeStoragePageModule {}
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
/*import { SqLitePage } from '../sqlite';*/
