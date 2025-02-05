import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../service/admin.service';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-users-forms-page',
  templateUrl: './users-forms-page.component.html',
  styleUrls: ['./users-forms-page.component.css']
})
export class UsersFormsPageComponent implements OnInit {

  public allUsers : User[] = [];

  constructor (
    private adminService : AdminService
  ) {}

  ngOnInit(): void {
    this.adminService.getUsers();
    this.adminService.users$.subscribe(users => this.allUsers = users);
  }
}
