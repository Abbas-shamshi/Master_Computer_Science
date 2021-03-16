import { Component, OnInit } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@Component({
  selector: 'app-speechrecognition',
  templateUrl: './speechrecognition.component.html',
  styleUrls: ['./speechrecognition.component.scss'],
})
export class SpeechrecognitionComponent implements OnInit {
  text: any;
  logs: any = [];
  constructor(
    private speechRecognition: SpeechRecognition
  ) { }

  ngOnInit() { }
  clearLog(){
    this.logs=[];

  }
  listen() {
    this.logs.push('Entered in Listening phase');
    let options = {
      language: 'en-IN',
      matches: 5, // increase this number if don't want  to stop listening

    }
    console.log("Entered Listening ")
    this.speechRecognition.isRecognitionAvailable()
      .then(
        (available: boolean) => {
          this.logs.push('Recognition available');
          console.log(available)
          this.speechRecognition.hasPermission()
            .then(
              (hasPermission: boolean) => {
                this.logs.push('permission granted');
                console.log(hasPermission);
                this.speechRecognition.startListening(options)
                  .subscribe(
                    (matches: Array<string>) => {
                      this.logs.push('started Listening');
                      console.log(matches);
                      this.text = matches
                    },
                    (onerror) => {
                      console.log('error: not', onerror);
                      this.logs.push('error while listening'+onerror);
                    }
                  )
              },
              () => {
                this.logs.push('no permision...requesting');
                this.speechRecognition.requestPermission()
                  .then(
                    () => {
                      this.logs.push('permission granted');
                      console.log('Granted');
                      this.speechRecognition.startListening(options)
                        .subscribe(
                          (matches: Array<string>) => {
                            this.logs.push('started listening after permission granted');
                            console.log(matches);
                            this.text = matches
                          },
                          (onerror) => {
                            this.logs.push('Error occured while listening');
                            console.log('error:', onerror)
                          }
                        )
                    },
                    () => {
                      this.logs.push('permission denied');
                      console.log('Denied')
                    }
                  )

              }
            )

        },
        () => {
          this.logs.push('recognition is not available');
        }

      )
  }

}
