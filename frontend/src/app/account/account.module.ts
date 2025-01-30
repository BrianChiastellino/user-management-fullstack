import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';

import { SharedModule } from '../shared/shared.module';
import { AccountFormPageComponent } from './pages/account-form-page/account-form-page.component';


@NgModule({
  declarations: [
    AccountFormPageComponent

  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule,
  ]
})
export class AccountModule { }
