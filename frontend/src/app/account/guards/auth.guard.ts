
import { Injectable } from "@angular/core";
import { CanActivateFn, CanMatchFn, Router } from "@angular/router";
import { catchError, filter, map, Observable, of, switchMap, take, tap } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";


@Injectable({
  providedIn: 'root',
})

export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = () => {
    // Verificar si el usuario está autenticado
    if (this.authService.checkAuth()) {
      return of(true); // Si está autenticado, permite el acceso
    }

    // Si no está autenticado, redirige al login
    this.router.navigate(['/auth']);
    return of(false); // No se permite el acceso
  };
}

