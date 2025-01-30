import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPageComponent } from './pages/navbar-page/navbar-page.component';
import { UserFormPageComponent } from './pages/user-form-page/user-form-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarPageComponent,
    UserFormPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[
    NavbarPageComponent,
    UserFormPageComponent
  ]
})
export class SharedModule { }
