import { Injectable } from "@angular/core";
import { CanActivateFn, CanMatchFn, Router } from "@angular/router";
import { filter, map, Observable, of, switchMap, take } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";

@Injectable({
  providedIn: 'root',
})


export class AdminGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = () => {
    // Verificar si el usuario es admin
    if (this.authService.checkAdmin()) {
      return of(true); // Si es admin, permite el acceso
    }

    // Si no es admin, redirige a la página principal
    this.router.navigate(['/']);
    return of(false); // No se permite el acceso
  };
}
