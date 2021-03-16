import { Component,HostListener } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  @HostListener('window:devicemotion',['$event']) 
  handleMotionEvent(event) {

    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
    console.log(`This is x: ${x}`);
    console.log(`This is y: ${y}`);
    console.log(`This is z: ${z}`);

    
    if (y > 5) {
      this.callAnime()
    }
    if (y < -5) {
this.callAxis()
    }


  }
  constructor() { }

  callAnime() {
    console.log("in");
    anime({
      targets: '.animate-me',
      backgroundColor: '#32CD32',
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad',
      translateX: 200,
      rotate: '5turn',
      duration: 3000,
      direction: 'alternate',
    });
  }
  callAxis() {
    console.log("animate-me")
    anime({
      targets: '.animate-me',
      backgroundColor: '#32CD32',
      borderRadius: ['0%', '50%'],
      easing: 'easeInOutQuad',
      translateX: 200,
      rotate: '5turn',
      duration: 3000,
      direction: 'reverse',
    });
  }
}


