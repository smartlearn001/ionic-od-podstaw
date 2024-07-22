import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-platform',
  templateUrl: './platform.page.html',
  styleUrls: ['./platform.page.scss'],
})
export class PlatformPage implements OnInit {
  get isTablet(): boolean {
    return this.platform.is("tablet");
  }

  constructor(private platform: Platform) { }

  ngOnInit() {
  }
}
