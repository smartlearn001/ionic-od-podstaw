import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShadowPage } from './shadow.page';

const routes: Routes = [
  {
    path: '',
    component: ShadowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShadowPageRoutingModule {}
