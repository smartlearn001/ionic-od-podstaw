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
  {
    path: 'components/lists',
    loadChildren: () => import('./components/lists/lists.module').then( m => m.ListsPageModule)
  },
  {
    path: 'components/cards',
    loadChildren: () => import('./components/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'components/forms',
    loadChildren: () => import('./components/forms/forms.module').then( m => m.FormsPageModule)
  },
  {
    path: 'components/menu',
    loadChildren: () => import('./components/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'components/loading',
    loadChildren: () => import('./components/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'components/tabs',
    loadChildren: () => import('./components/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'components/alerts',
    loadChildren: () => import('./components/alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'components/toasts',
    loadChildren: () => import('./components/toasts/toasts.module').then( m => m.ToastsPageModule)
  },
  {
    path: 'components/modals',
    loadChildren: () => import('./components/modals/modals.module').then( m => m.ModalsPageModule)
  },
  {
    path: 'components/grids',
    loadChildren: () => import('./components/grids/grids.module').then( m => m.GridsPageModule)
  },
  {
    path: 'components/npm',
    loadChildren: () => import('./components/npm/npm.module').then( m => m.NpmPageModule)
  },
  {
    path: 'styles/colors',
    loadChildren: () => import('./styles/colors/colors.module').then( m => m.ColorsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
