
import { Injectable } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { catchError, filter, map, Observable, of, switchMap, tap } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";


@Injectable({
  providedIn: 'root',
})

export class AuthGuard {

  constructor (
    private router : Router,
    private authService : AuthService,
  ) {}

  public canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      map(( isAuth ) => {
        if ( !isAuth ) {
          this.redirectToLogin();
        }
        return isAuth;
      })
    );
  }

  private redirectToLogin(): void {
    this.router.navigateByUrl('auth/login');
  }


}

// map( auth => { if (auth) {
//   return true;
// } else {
//   this.router.navigate(['/login']);
//   return false;
// }
// }),
// catchError(() => {
// this.router.navigate(['/login']);
// return of(false);
// })

