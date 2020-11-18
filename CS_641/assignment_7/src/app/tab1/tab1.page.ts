import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

import { BrowserPage } from '../browser/browser.page'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
a:1;
  constructor(
    private router: Router,
    public navCtrl: NavController
  ) {}

  navigateUrl(){
    this.router.navigateByUrl('/browser');
  }
  sendData(browser){
    this.router.navigate(['/browser',browser]);
  }
 

}
