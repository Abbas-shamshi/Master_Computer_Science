import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
@Input() fetchedData;
  constructor(
    public modalController: ModalController
    
  ) { }

  ngOnInit() {
  }
  dismiss(){
    this.modalController.dismiss({
      'dismissed':true
    })
  }

}
