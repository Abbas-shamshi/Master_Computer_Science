import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Vibration } from '@ionic-native/vibration/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';
import { Screenshot } from '@ionic-native/screenshot/ngx';
import { Shake } from '@ionic-native/shake/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
// import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { Brightness } from '@ionic-native/brightness/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    Vibration,
    Flashlight,
    Keyboard,
    NavigationBar,
    Screenshot,
    Shake,
    BarcodeScanner,
    // QRScanner,
    SpeechRecognition,
    TextToSpeech,
    Brightness,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
