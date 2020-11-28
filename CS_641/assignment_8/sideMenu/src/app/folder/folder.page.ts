import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import {ModalPage} from '../modal/modal.page';
import { ActionSheetController } from '@ionic/angular';





@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  name:string;


  constructor(
    private activatedRoute: ActivatedRoute,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController
    ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }
  saveData(){
    console.log("This is my name "+this.name);
  }


// Show Modal

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'modal-bck',
      componentProps: {
        'firstName': 'Abbas',
        'lastName': 'Shamshi',
        'typedName': this.name
      }
    });
    return await modal.present();
  }

// Action Sheet
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Save',
          role: 'destructive',
          icon: 'save-outline',
          handler: () => {
            console.log('Delete clicked');
          }
        }, 
        {
          text: 'forward',
          role: 'destructive',
          icon: 'arrow-forward-outline',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
