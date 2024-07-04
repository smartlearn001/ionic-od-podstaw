import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage {

  constructor(private loadingCtrl: LoadingController) {}

  async open(): Promise<void> {
    let sec = 5

    const loading = await this.loadingCtrl.create({
      message: `Zamknij po ${sec} sekundach...`,
    });

    const intervalId = setInterval(() => {
      sec--;
      loading.message = `Zamknij po ${sec} sekundach...`;
    }, 1000);

    setTimeout(async () => {
      clearInterval(intervalId);
      await loading.dismiss();
    }, sec * 1000);

    loading.present();
  }
}
