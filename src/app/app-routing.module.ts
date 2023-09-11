import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'components/buttons',
    loadChildren: () => import('./components/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'components/toolbars',
    loadChildren: () => import('./components/toolbars/toolbars.module').then( m => m.ToolbarsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
