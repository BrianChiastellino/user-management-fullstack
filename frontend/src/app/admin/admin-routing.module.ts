import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormsPageComponent } from './pages/users-forms-page/users-forms-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path : 'users', component: UsersFormsPageComponent },
      { path: '**', redirectTo: 'users'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
