import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ShakeComponent } from '../components/shake/shake.component';
import { BarcodeComponent } from '../components/barcode/barcode.component';
import { QrcodeComponent } from '../components/qrcode/qrcode.component';
import { SpeechrecognitionComponent } from '../components/speechrecognition/speechrecognition.component';
import { Text2speechComponent } from '../components/text2speech/text2speech.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule
  ],
  declarations: [Tab2Page,ShakeComponent,BarcodeComponent,QrcodeComponent,Text2speechComponent]
})
export class Tab2PageModule {}
