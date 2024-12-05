import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtPayload } from '../models/jwt-payload.model';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient,
  ) { }

  public login ( identificador : string, password : string ) : Observable<JwtPayload | null> {
    if ( !identificador || !password)
      return of(null);

    const body = { identificador, password }

    return this.http.post<JwtPayload | null>(`${ environment.BASE_URL_BACKEND}`, body )
  };


}
