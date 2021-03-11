import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text2speech',
  templateUrl: './text2speech.component.html',
  styleUrls: ['./text2speech.component.scss'],
})
export class Text2speechComponent implements OnInit {
  text:string
  constructor(
    private tts: TextToSpeech
  ) { }

  ngOnInit() {}
  speak(){
    this.tts.speak(this.text)
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));

  }
}
