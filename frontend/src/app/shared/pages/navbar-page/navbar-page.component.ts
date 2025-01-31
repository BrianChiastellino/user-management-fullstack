import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent {

  constructor(private authService: AuthService, private router: Router) {}

  public onLogout(): void {
    this.authService.logout().subscribe( () => {
      this.router.navigateByUrl('/auth');
    });
  };

}
