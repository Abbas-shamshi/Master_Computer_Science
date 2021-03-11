import { Component, OnInit } from '@angular/core';
import { NavigationBar } from '@ionic-native/navigation-bar/ngx';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss'],
})
export class NavigationbarComponent implements OnInit {

  constructor(
    private navigationBar: NavigationBar
  ) { }

  ngOnInit() { }

  showNavBar() {
    let autoHide: boolean = true;
    this.navigationBar.setUp(autoHide);
    console.log("Show Nav Bar");

  }
  hideNavBar() {
    let autoHide: boolean = false;
    this.navigationBar.setUp(autoHide);
    console.log("Show Nav Bar");

  }
}
