import { Component, OnInit, ViewChild, Renderer2, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @ViewChild('myCanvas') canvas: any;
  canvasElement: any;
  colors = ['#e399a7', '#e27f5d', '#58b69a', '#c58794', '#e36531', '#8fa8db', '#df7a54', '#dd949d', '#e9a731', '#e1a48d', '#f2a533', '#a2c0f1', '#d9a3b1',
    '#ee7c36', '#5fc6de', '#e8a1b5', '#f2a533', '#f0b7a8', '#e9a4ae', '#82c62f', '#edb5a4', '#f1b132',
    '#86c5e4', '#e9af9d', '#f29b33', '#e399a7', '#e27f5d', '#58b69a', '#c58794', '#e36531', '#8fa8db',
    '#df7a54', '#dd949d', '#e9a731', '#e1a48d'];
  j = 5;
  canvasHeight: any;
  canvasWidth: any;
  canvasElementHeight: any;
  canvasElementWidth: any;
  ctx: any;
  @HostListener('window:orientationchange', ['$event'])
  onOrientationChange(event) {
    console.log('orientationChanged');
  }

  @HostListener('window:devicemotion',['$event']) 
    handleMotionEvent(event) {

      var x = event.accelerationIncludingGravity.x;
      var y = event.accelerationIncludingGravity.y;
      var z = event.accelerationIncludingGravity.z;
  
      console.log(`This is x: ${x}`);
      console.log(`This is y: ${y}`);
      console.log(`This is z: ${z}`);
  
      console.log(this.j + "This is pre if")
      if (this.j > 10) {
        this.j = 0;
  
      } else if (this.j < 0) {
        this.j = 5
      }
      if (y > 1) {
        this.j = this.j + 0.04;
      }
      if (y < 1) {
        this.j = this.j - 0.04;
  
      }
      console.log(this.j + " this is j");
  
      this.myCanvasDrawingFunction(this.j);
  
      // Do something awesome.
    }
  constructor(
    public platform: Platform,
    public renderer: Renderer2
  ) {
    console.log("Hello this is canavas")
    this.canvasHeight = this.platform.height();
    this.canvasWidth = this.platform.width();


  }

  ngOnInit() {

    
  }

  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.renderer.setAttribute(this.canvasElement, 'width', this.canvasWidth);
    this.renderer.setAttribute(this.canvasElement, 'height', this.canvasHeight);
    this.ctx = this.canvasElement.getContext('2d');


    this.myCanvasDrawingFunction(null)
    console.log(this.canvas + "canvas has been initialized");
    console.log(this.platform.width());


  }

  myCanvasDrawingFunction(j) {

    this.ctx.moveTo(0, 0);
    var incr = this.canvasHeight / 25;
    this.ctx.lineWidth = incr;
    j = Math.floor(j);
    for (var i = 5; i < 30; i = i + 1) {
      // console.log(colors[i]);
      if (!j) {
        this.drawLine(0, incr * (i - 5) + 10, this.canvasWidth, incr * (i - 5) + 10, i);

      } else {
        this.drawLine(0, incr * (i - 5) + 10, this.canvasWidth, incr * (i - 5) + 10, i + j);

      }

    }
  }

  drawLine(a, b, c, d, color) {
    this.ctx.beginPath();
    // if (i > 24) {

    // }
    this.ctx.strokeStyle = this.colors[color];
    this.ctx.moveTo(a, b);
    this.ctx.lineTo(c, d);
    this.ctx.stroke();
  }




}
