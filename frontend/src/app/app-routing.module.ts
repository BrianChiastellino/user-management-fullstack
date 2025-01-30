import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './account/guards/auth.guard';
import { PublicGuard } from './auth/guards/public.guard';
import { AdminGuard } from './admin/guard/admin.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren : () => import('./auth/auth.module').then( m => m.AuthModule ),
    // canActivate: [ PublicGuard ],
  },
  {
    path: 'account',
    loadChildren : () => import('./account/account.module').then( m => m.AccountModule ),
    // canActivate: [ AuthGuard ],
  },
  {
    path: 'admin',
    loadChildren : () => import('./admin/admin.module').then( m => m.AdminModule ),
    // canActivate: [ AdminGuard ],

  },
  {
    path: '**',
    redirectTo: 'auth',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
