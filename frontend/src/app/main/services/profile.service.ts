import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { User } from 'src/app/auth/models/user.model';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
  ) { }

  public getProfile () : Observable<User | null> {
    //Habilitamos credentials para enviar las cookies
    return this.http.get<User>(`${ environment.BASE_URL_BACKEND }/profile/settings/account/me`, { withCredentials : true })

  }



}
