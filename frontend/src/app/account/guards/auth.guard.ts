
import { Injectable } from "@angular/core";
import { CanActivateFn, CanMatchFn, Router } from "@angular/router";
import { catchError, filter, map, Observable, of, switchMap, take, tap } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";


@Injectable({
  providedIn: 'root',
})

export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthentication() : Observable<boolean> {
    return this.authService.user$.pipe(
      map( user => !!user),
      tap( user => console.log({ authGuard : user })),
      tap( isAuth => {
        if ( !isAuth )
          this.router.navigateByUrl('/auth')
      }),
    );
  };


  public canActivate: CanActivateFn = (route, state) => {
    return this.checkAuthentication();
  };
}

