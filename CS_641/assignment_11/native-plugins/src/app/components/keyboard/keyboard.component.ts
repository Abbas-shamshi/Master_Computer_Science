import { Component, OnInit } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {

  constructor(
    private keyboard:Keyboard
  ) { }

  ngOnInit() {}
  showKeyboard() {
    console.log("Show Keyboard");

    this.keyboard.show();

  }
  hideKeyboard(){
    this.keyboard.hide();
    console.log("Hide Keyboard");


  }
}
