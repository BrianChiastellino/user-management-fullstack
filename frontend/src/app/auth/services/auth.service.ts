import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtPayload } from '../models/jwt-payload.model';
import { environment } from 'src/env';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient,
  ) { }

  public login ( username : string, password : string ) : Observable<JwtPayload | null> {
    if ( !username || !password)
      return of(null);

    const body = { username, password }

    return this.http.post<JwtPayload | null>(`${environment.BASE_URL_BACKEND}/auth/login`, body, { withCredentials: true } )
  };

  public register ( user : User ) : Observable<User | null> {
    if ( !user )
      return of (null);

    return this.http.post<User>(`${ environment.BASE_URL_BACKEND}/auth/register`, user);
  };


}
