import { Component, Input } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
})
export class ModalsPage {

  constructor(private modalCtrl: ModalController) {}

  async cancel(modal: IonModal): Promise<void> {
    const data = { text: "tekst" };
    const role = "cancel";

    await modal.dismiss(data, role);
  }

  onWillDismiss(event: Event): void {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;

    const data = ev.detail.data;
    const role = ev.detail.role;

    console.log({ data,  role });
  }

  async openModalSimple(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        title: "Tytuł z inputa",
        message: "Wiadomość z inputa"
      }
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    console.log({ data,  role });
  }
}

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-button (click)="cancel()">Zamknij</ion-button>
          </ion-buttons>
          <ion-title>{{ title }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-item>
          {{ message }}
        </ion-item>
      </ion-content>
  
  `,
})
export class ModalComponent {
  @Input() title = '';
  @Input() message = '';

  constructor(private modalCtrl: ModalController) {}

  async cancel(): Promise<void> {
    const data = { text: "tekst" };
    const role = "cancel";

    await this.modalCtrl.dismiss(data, role);
  }
}
