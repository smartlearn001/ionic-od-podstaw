import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrashlyticsPage } from './crashlytics.page';

const routes: Routes = [
  {
    path: '',
    component: CrashlyticsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrashlyticsPageRoutingModule {}
