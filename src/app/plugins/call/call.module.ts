import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

import { IonicModule } from '@ionic/angular';

import { CallPageRoutingModule } from './call-routing.module';

import { CallPage } from './call.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CallPageRoutingModule,
  ],
  declarations: [CallPage],
  providers: [CallNumber]
})
export class CallPageModule {}
