import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShadowPageRoutingModule } from './shadow-routing.module';

import { ShadowPage } from './shadow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShadowPageRoutingModule
  ],
  declarations: [ShadowPage]
})
export class ShadowPageModule {}
