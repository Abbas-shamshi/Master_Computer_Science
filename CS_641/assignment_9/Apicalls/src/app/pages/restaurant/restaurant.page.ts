import { Component, OnInit } from '@angular/core';
import { FetcDataService } from '../../services/fetc-data.service'
import { AlertController, ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  currencydata;
  currObj;
  currArray;
  constructor(
    private data : FetcDataService,
    public alertController: AlertController,
    public modalController: ModalController
  ) { }

 ngOnInit() {
    console.log("enterd oninit");
    /*  this.currencydata = await this.data.fetchCurrency();
    console.log(this.currencydata+"Data Fetched")

 */

    ///

    this.data.fetchCurrency()
    .then(data => {
      this.currObj = data;
      this.currencydata=JSON.stringify(this.currObj.rates);
      this.currArray = Object.entries(this.currObj.rates);
      

      console.log(this.currencydata+"stringify call")

      // console.log(this.currObj.rates.CAD+"async call")
      
    });
  }
async presentModal(){
  const modal = await this.modalController.create({
    component:ModalPage,
    componentProps:{
      'fetchedData':this.currArray
    }
  });
  return await modal.present();
}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'CURRENCY & VALUE',
      subHeader: 'Base currency USD',
      message: this.currArray,
      buttons: ['OK']
    });

    await alert.present();
  }
}
