import { Component } from '@angular/core';
import {ModalViewPage} from "../modal-view/modal-view";
import {ActionSheetController, ModalController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modal:ModalController, public actionSheetCtrl: ActionSheetController){


  }
  name: string
  openModal() {
    const someData = {
    };
    const mModal = this.modal.create('ModalViewPage', {name: this.name});
    mModal.present();
  }
  presentActionSheet(){
  let actionSheet = this.actionSheetCtrl.create({
 title: 'Select the house of your choice',
    buttons: [
      {
        text: 'Select House Lannister',
        handler: () => {
          console.log('House Lannister clicked');

        }
      }, {
        text: 'House Tyrell',
        handler: () => {
          console.log('House Tyrell clicked');
          }

        },{
        text: 'House Targaryen',
        handler: () => {
          console.log('House Targaryen clicked');
        }
      }
  ]
  });
  actionSheet.present();
  }
}

