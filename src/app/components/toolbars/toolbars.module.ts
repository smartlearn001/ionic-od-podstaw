import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolbarsPageRoutingModule } from './toolbars-routing.module';

import { ToolbarsPage } from './toolbars.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolbarsPageRoutingModule
  ],
  declarations: [ToolbarsPage]
})
export class ToolbarsPageModule {}
