import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.page.html',
  styleUrls: ['./toasts.page.scss'],
})
export class ToastsPage {

  constructor(private toastController: ToastController) {}

  async openToastSimple(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Uwaga powiadomienie!',
      duration: 1500,
      position: 'middle',
    });

    await toast.present();
  }

  async openToastButtons(): Promise<void> {
    const toast = await this.toastController.create({
      message: 'Masz wiadomość!',
      duration: 1500,
      position: 'bottom',
      buttons: [
        "Anuluj",
        {
          text: "Odczytaj",
          handler: () => {
            console.log("test");
          }
        }
      ]
    });

    await toast.present();
  }
}
