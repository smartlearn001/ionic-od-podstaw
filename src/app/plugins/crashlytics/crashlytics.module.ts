import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrashlyticsPageRoutingModule } from './crashlytics-routing.module';

import { CrashlyticsPage } from './crashlytics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrashlyticsPageRoutingModule
  ],
  declarations: [CrashlyticsPage]
})
export class CrashlyticsPageModule {}
