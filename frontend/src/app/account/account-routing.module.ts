import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountMePageComponent } from './pages/account-me-page/account-me-page.component';
import { AccountUpdatePageComponent } from './pages/account-update-page/account-update-page.component';
import { AccountDeletePageComponent } from './pages/account-delete-page/account-delete-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'profile/me', component: AccountMePageComponent, },
      { path: 'profile/update', component: AccountUpdatePageComponent, },
      { path: 'profile/update', component: AccountDeletePageComponent, },
      { path: '**', redirectTo: 'profile/me', }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
