import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.page.html',
  styleUrls: ['./browser.page.scss'],
})
export class BrowserPage implements OnInit {
browserName;
  constructor(
    private route: ActivatedRoute, 

  ) { }

  ngOnInit() {
      this.browserName = this.route.snapshot.paramMap.get('browser');
      console.log("miqaat details", this.browserName);
      
  }

}
