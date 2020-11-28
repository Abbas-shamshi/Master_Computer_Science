import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  // Data passed in by componentProps
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() typedName: string;
  display: string;
  rangeValue;

  constructor(
    public modalController: ModalController,
    public loadingController: LoadingController

  ) { }

  ngOnInit() {
    console.log("Data Received " + this.firstName)
    if (this.typedName) {
      this.display = "Hello " + this.typedName;
    } else {
      this.display = "Greeting of the Day";

    }
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
  rangeChange() {
    console.log("Change in value " + this.rangeValue);
    this.presentLoading();
  }

  // Loading funtion
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'loading',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
 

}