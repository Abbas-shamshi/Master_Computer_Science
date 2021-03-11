import { Component, OnInit } from '@angular/core';
import { Screenshot } from '@ionic-native/screenshot/ngx';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.scss'],
})
export class ScreenshotComponent implements OnInit {

  constructor(
    private screenshot: Screenshot
  ) { }

  ngOnInit() {}

  capture(){
    this.screenshot.save('jpg', 80, 'myscreenshot.jpg');

  }
}
