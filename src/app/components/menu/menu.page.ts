import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage {
  constructor(private menuCtrl: MenuController) {}

  openStartMenu() {
    this.menuCtrl.open('start');
  }

  openEndMenu() {
    this.menuCtrl.open('end');
  }
}
