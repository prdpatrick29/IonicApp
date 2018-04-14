import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController} from 'ionic-angular';

/**
 * Generated class for the ModalViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal-view',
  templateUrl: 'modal-view.html',
})
export class ModalViewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  this.name = navParams.get("name");
  console.log(name);
  }
  

  ionViewDidLoad() {

   const data= this.navParams.get('data');
   console.log(data);
  }
closeModal(){
    this.view.dismiss();
}
}
