import { Injectable } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PublicGuard {
  constructor(private router: Router, private authService: AuthService) {}

  public canActivate () : Observable<boolean> {
    return this.authService.isAuthenticated$.pipe(
      map(( isAuth ) => {
        if ( isAuth ) {
          this.router.navigate(['/account']);
        }
        return !isAuth;
      })
    );
  }
}
