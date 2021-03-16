import { Component, OnInit } from '@angular/core';
import { Brightness } from '@ionic-native/brightness/ngx';

@Component({
  selector: 'app-brightness',
  templateUrl: './brightness.component.html',
  styleUrls: ['./brightness.component.scss'],
})
export class BrightnessComponent implements OnInit {

  value: any;
  display:any;
  constructor(
    private brightness: Brightness
  ) { }

  ngOnInit() { }

  setBrightness(range) {
    console.log("Change was Triggered"+ this.value)
    let brightnessValue = (this.value / 100);
    console.log(brightnessValue+"Valueb in float")
    this.brightness.setBrightness(brightnessValue);

  }
}
