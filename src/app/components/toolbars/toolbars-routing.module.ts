import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToolbarsPage } from './toolbars.page';

const routes: Routes = [
  {
    path: '',
    component: ToolbarsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToolbarsPageRoutingModule {}
