import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountFormComponent } from './components/account-form/account-form.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AccountFormPageComponent } from './pages/account-form-page/account-form-page.component';


@NgModule({
  declarations: [
    AccountFormComponent,
    AccountFormPageComponent

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AccountModule { }
