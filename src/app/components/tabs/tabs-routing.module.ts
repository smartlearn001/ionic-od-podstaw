import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first',
      },
      {
        path: 'first',
        loadChildren: () => import('./first/first.module').then( m => m.FirstPageModule)
      },
      {
        path: 'second',
        loadChildren: () => import('./second/second.module').then( m => m.SecondPageModule)
      },
      {
        path: 'third',
        loadChildren: () => import('./third/third.module').then( m => m.ThirdPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
