import { Injectable } from "@angular/core";
import { CanActivateFn, CanMatchFn, Router } from "@angular/router";
import { filter, map, Observable, of, switchMap, take, tap } from "rxjs";
import { AuthService } from "src/app/auth/services/auth.service";

@Injectable({
  providedIn: 'root',
})


export class AdminGuard {
  constructor(private authService: AuthService, private router: Router) {}

  private checkAuthentication() : Observable<boolean> {
    return this.authService.user$.pipe(
      map( user => user?.role === 'admin'),
      tap( isAdmin => console.log({ guardAdmin : isAdmin })),
      tap( isAdmin => {
        if ( !isAdmin )
          this.router.navigateByUrl('/account');
      }),
    )
  };


  public canActivate: CanActivateFn = (route, state) => {
    return this.checkAuthentication();
  };
}
