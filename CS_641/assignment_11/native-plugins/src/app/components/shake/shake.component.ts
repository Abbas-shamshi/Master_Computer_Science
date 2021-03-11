import { Component, OnInit } from '@angular/core';
import { Shake } from '@ionic-native/shake/ngx';

@Component({
  selector: 'app-shake',
  templateUrl: './shake.component.html',
  styleUrls: ['./shake.component.scss'],
})
export class ShakeComponent implements OnInit {

  count:number;
  watch:any;
  constructor(
    private shake: Shake
  ) { }

  ngOnInit() {
    this.count=0;
  }

  watchShake(){
    this.watch = this.shake.startWatch(60).subscribe(() => {
      this.count++;
      console.log("Shaked");
      });
      this.watch.unsubscribe();

    }
    StopWatch(){
      this.watch.unsubscribe();

    }
}
