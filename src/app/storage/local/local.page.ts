import { AfterContentInit, Component } from '@angular/core';
import { Drivers } from '@ionic/storage';
import { Storage } from '@ionic/storage-angular';

const DATA_KEY = "DATA";

@Component({
  selector: 'app-local',
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
})
export class LocalPage implements AfterContentInit {
  data: any;

  constructor(private storage: Storage) { }

  async refreshData(): Promise<void> {
    this.data = await this.storage.get(DATA_KEY);
  }

  async setData(): Promise<void> {
    await this.storage.set(DATA_KEY, new Date().getTime().toString());
    await this.refreshData();
  }

  async removeData(): Promise<void> {
    await this.storage.remove(DATA_KEY); 
    await this.refreshData();
  }

  async ngAfterContentInit(): Promise<void> {
    await this.storage.create();

    await this.refreshData();
  }
}
