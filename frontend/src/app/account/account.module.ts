import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { AccountUpdatePageComponent } from './pages/account-update-page/account-update-page.component';
import { AccountDeletePageComponent } from './pages/account-delete-page/account-delete-page.component';
import { AccountMePageComponent } from './pages/account-me-page/account-me-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AccountFormComponent,
    AccountUpdatePageComponent,
    AccountDeletePageComponent,
    AccountMePageComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AccountModule { }
