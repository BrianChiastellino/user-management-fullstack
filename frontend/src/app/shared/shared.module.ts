import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPageComponent } from './pages/navbar-page/navbar-page.component';



@NgModule({
  declarations: [
    NavbarPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarPageComponent
  ]
})
export class SharedModule { }
