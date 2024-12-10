import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: 'auth',
  loadChildren : () => import('./auth/auth.module').then( m => m.AuthModule ),
  },
  {
    path: 'main',
    loadChildren : () => import('./main/main.module').then( m => m.MainModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountModule ),
  },
  {
    path: '**',
    redirectTo: 'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
