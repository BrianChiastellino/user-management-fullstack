import { HttpClient } from '@angular/common/http';
import { Injectable, signal, Signal } from '@angular/core';
import { Observable, of, catchError, BehaviorSubject, tap, map } from 'rxjs';
import { JwtPayload } from '../models/jwt-payload.model';
import { environment } from 'src/env';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null); // Almacena al usuario
  public user$: Observable<User | null> = this.userSubject.asObservable(); // Observable público para acceder a los datos del usuario



  constructor(
    private http : HttpClient,
  ) {
    this.checkAdmin();
    this.checkAuth();
  }


  public login(username: string, password: string): Observable<User | null> {
    if (!username || !password) return of(null);

    const body = { username, password };

    return this.http.post<User>(`${environment.BASE_URL_BACKEND}/auth/login`, body, { withCredentials: true }).pipe(
      tap(user => {
        console.log({ userFromLogin: user });  // Verificamos que el backend devuelve el usuario correctamente
        this.userSubject.next(user);  // Actualizamos el BehaviorSubject con el valor recibido
      }),
      tap(() => console.log('Valor actualizado de userSubject:', this.userSubject.getValue())),  // Verificamos el valor de userSubject
      tap(() => console.log('Estado de user$: ', this.user$)),  // Verificamos el observable user$
    );
  }


  public register ( user : User ) : Observable<User | null> {
    if ( !user )
      return of (null);

    return this.http.post<User>(`${environment.BASE_URL_BACKEND}/auth/register`, user);
  };

  public checkAuth() : Observable<boolean> {
    console.log( this.userSubject.getValue() );
    return of(this.userSubject.getValue() !== null);
  }

  public checkAdmin () : boolean  {
    return this.userSubject.getValue()?.role === 'admin' ? true : false;
  }


  public logout(): void {

  }


}
