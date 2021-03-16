import { Component, OnInit } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Component({
  selector: 'app-vibrate',
  templateUrl: './vibrate.component.html',
  styleUrls: ['./vibrate.component.scss'],
})
export class VibrateComponent implements OnInit {

  constructor(
    public vibration:Vibration
  ) { }

  ngOnInit() {}

  vibrate(){
    console.log("in Vibarte");
    this.vibration.vibrate(1000);
  }
  vibrateMore(){
    console.log("in Vibarte more");
    this.vibration.vibrate([2000,1000,2000]);

  }
  vibrateStop(){
    console.log("in Vibarte Stop");
    this.vibration.vibrate(0);

  }
}
