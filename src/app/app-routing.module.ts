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
  {
    path: 'styles/shadow',
    loadChildren: () => import('./styles/shadow/shadow.module').then( m => m.ShadowPageModule)
  },
  {
    path: 'styles/platform',
    loadChildren: () => import('./styles/platform/platform.module').then( m => m.PlatformPageModule)
  },
  {
    path: 'styles/tailwind',
    loadChildren: () => import('./styles/tailwind/tailwind.module').then( m => m.TailwindPageModule)
  },
  {
    path: 'plugins/camera',
    loadChildren: () => import('./plugins/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'plugins/gps',
    loadChildren: () => import('./plugins/gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'plugins/call',
    loadChildren: () => import('./plugins/call/call.module').then( m => m.CallPageModule)
  },
  {
    path: 'plugins/crashlytics',
    loadChildren: () => import('./plugins/crashlytics/crashlytics.module').then( m => m.CrashlyticsPageModule)
  },
  {
    path: 'plugins/share',
    loadChildren: () => import('./plugins/share/share.module').then( m => m.SharePageModule)
  },
  {
    path: 'storage/api',
    loadChildren: () => import('./storage/api/api.module').then( m => m.ApiPageModule)
  },
  {
    path: 'storage/local',
    loadChildren: () => import('./storage/local/local.module').then( m => m.LocalPageModule)
  },
  {
    path: 'storage/firestore',
    loadChildren: () => import('./storage/firestore/firestore.module').then( m => m.FirestorePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
