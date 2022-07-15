import { DetailPage } from './../detail/detail.page';
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
  
})

export class Tab2Page {
  
   constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: DetailPage,
    });

    return await modal.present();
  }
  openSite(url: string | URL){
    window.open(url)
    }
  
}

