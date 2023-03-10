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
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'das',
    loadChildren: () => import('./pages/das/das.module').then( m => m.DasPageModule)
  },
  {
    path: 'nfe',
    loadChildren: () => import('./pages/nfe/nfe.module').then( m => m.NfePageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pages/pay/pay.module').then( m => m.PayPageModule)
  },
  {
    path: 'extrato',
    loadChildren: () => import('./pages/extrato/extrato.module').then( m => m.ExtratoPageModule)
  },
  {
    path: 'pix',
    loadChildren: () => import('./pages/pix/pix.module').then( m => m.PixPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then( m => m.WalletPageModule)
  },  {
    path: 'dados',
    loadChildren: () => import('./pages/dados/dados.module').then( m => m.DadosPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
