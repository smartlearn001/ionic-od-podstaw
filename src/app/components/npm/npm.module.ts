import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { IonicModule } from '@ionic/angular';

import { NpmPageRoutingModule } from './npm-routing.module';

import { NpmPage } from './npm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    NpmPageRoutingModule
  ],
  declarations: [NpmPage]
})
export class NpmPageModule {}
