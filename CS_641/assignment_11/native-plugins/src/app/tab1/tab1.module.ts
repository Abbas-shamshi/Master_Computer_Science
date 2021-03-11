import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { VibrateComponent } from '../components/vibrate/vibrate.component';
import { FlashlightComponent } from '../components/flashlight/flashlight.component';
import { KeyboardComponent } from '../components/keyboard/keyboard.component';
import { NavigationbarComponent } from '../components/navigationbar/navigationbar.component';
import { ScreenshotComponent } from '../components/screenshot/screenshot.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page,VibrateComponent,FlashlightComponent,KeyboardComponent,NavigationbarComponent,ScreenshotComponent]
})
export class Tab1PageModule {}
