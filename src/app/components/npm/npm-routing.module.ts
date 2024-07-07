import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NpmPage } from './npm.page';

const routes: Routes = [
  {
    path: '',
    component: NpmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NpmPageRoutingModule {}
