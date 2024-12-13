import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, catchError, BehaviorSubject, tap } from 'rxjs';
import { JwtPayload } from '../models/jwt-payload.model';
import { environment } from 'src/env';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public isAuthenticated$: Observable<boolean> = this.isAuthenticatedSubject.asObservable();


  constructor(
    private http : HttpClient,
  ) { }

  public login ( username : string, password : string ) : Observable<JwtPayload | null> {
    if ( !username || !password)
      return of(null);

    const body = { username, password }

    return this.http.post<JwtPayload | null>(`${environment.BASE_URL_BACKEND}/auth/login`, body, { withCredentials: true } ).pipe(
      tap ( () => { this.isAuthenticatedSubject.next( true ) })
    )
  };

  public register ( user : User ) : Observable<User | null> {
    if ( !user )
      return of (null);

    return this.http.post<User>(`${environment.BASE_URL_BACKEND}/auth/register`, user);
  };

  public checkAuth(): Observable<boolean> {
    return this.http.get<boolean>(`${environment.BASE_URL_BACKEND}/auth/check`, { withCredentials: true }).pipe(
      tap(( isAuth ) => this.isAuthenticatedSubject.next( isAuth ))
    );
  }

  public logout(): Observable<void> {
    return this.http.post<void>(`${environment.BASE_URL_BACKEND}/auth/logout`, {}, { withCredentials: true }).pipe(
      tap( () => this.isAuthenticatedSubject.next( false ))
    );
  }


}
