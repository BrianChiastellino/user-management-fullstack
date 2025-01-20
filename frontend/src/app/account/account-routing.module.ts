import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountFormPageComponent } from './pages/account-form-page/account-form-page.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'profile/me', component: AccountFormPageComponent },
      { path: '**', redirectTo: 'profile/me', }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
