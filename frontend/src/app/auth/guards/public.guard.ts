import { Injectable } from "@angular/core";
import { CanActivate, CanActivateFn, CanMatchFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { catchError, map, Observable, of, take, tap } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class PublicGuard{

  constructor( private authService: AuthService, private router: Router) {}

  private checkAuthentication(): Observable<boolean>{
    return this.authService.user$.pipe(
      map( user => !user ),
      tap( isPublic => {
        if ( !isPublic )
            this.router.navigateByUrl('/account');
      }),
    );
  };

  public canActivate: CanActivateFn = (route, state) => {
    return this.checkAuthentication();
  };

  }
