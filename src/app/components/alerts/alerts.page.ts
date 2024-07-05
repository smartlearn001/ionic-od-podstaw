import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage {
  constructor(private alertCtrl: AlertController) { }

  async openAlertSimple(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Uwaga alert!',
      message: 'Opis co się stało.',
      buttons: [
        "Anuluj",
        {
          text: "Zatwierdź",
          handler: () => {
            console.log("test");
          }
        }
      ],
    });

    await alert.present();
  }

  async openAlertInputs(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Uwaga alert!',
      message: 'Uzupełnij formularz.',
      inputs: [
        {
          placeholder: 'Nazwa',
        },
        {
          placeholder: 'Nickname (max 10  znaków)',
          attributes: {
            maxlength: 10,
          },
        },
        {
          type: 'number',
          placeholder: 'Wiek',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'Opis',
        }
      ],
      buttons: [
        {
          text: "Zatwierdź",
          handler: (event) => {
            console.log("name", event[0]);
            console.log("nick", event[1]);
            console.log("age", event[2]);
            console.log("description", event[3]);
          }
        }
      ],
    });

    await alert.present();
  }

  async openAlertRadio(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Uwaga alert!',
      message: 'Wybierz kolor',
      inputs: [
        {
          label: 'Czerwony',
          type: 'radio',
          value: 'red',
        },
        {
          label: 'Niebieski',
          type: 'radio',
          value: 'blue',
        },
        {
          label: 'Zielony',
          type: 'radio',
          value: 'green',
        }
      ],
      buttons: [
        {
          text: "Zatwierdź",
          handler: (event) => {
            console.log("color", event);
          }
        }
      ],
    });

    await alert.present();
  }
}
