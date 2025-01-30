import { Injectable } from "@angular/core";
import { CanActivate, CanActivateFn, CanMatchFn, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { catchError, map, Observable, of, take, tap } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class PublicGuard{

  constructor( private authService: AuthService, private router: Router) {}

  private checkAuthentication(): void{
    this.authService.user$.pipe(
      tap(user => console.log({ userFromAccount: user })),  // Verificar valor antes de suscribirse
    ).subscribe(user => {
      console.log({ data: user });  // Aquí obtenemos el valor del usuario
    });

  }



  // public canActivate: CanActivateFn = (route, state) => {
  //   return this.checkAuthentication();
  // };

  }
