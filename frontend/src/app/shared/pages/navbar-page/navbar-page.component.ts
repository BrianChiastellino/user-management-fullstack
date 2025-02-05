import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar-page',
  templateUrl: './navbar-page.component.html',
  styleUrls: ['./navbar-page.component.css']
})
export class NavbarPageComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) {}

  public showLogoutButton : boolean = true;

  ngOnInit(): void {
    // Verifica la URL actual al inicializar el componente
    this.showLogoutButton = !this.router.url.includes('/auth');

    // Suscríbete a los cambios de ruta para actualizar dinámicamente
    this.router.events.subscribe(() => {
      this.showLogoutButton = !this.router.url.includes('/auth');
    });
  }

  public onLogout(): void {
    this.authService.logout().subscribe( () => {
      this.router.navigateByUrl('/auth');
    });
  };

}
