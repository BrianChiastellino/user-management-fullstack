import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http : HttpClient,
  ) { }

  public getAccount ( id : string ) : Observable<User | null> {
    //Habilitamos credentials para enviar las cookies
    return this.http.get<User>(`${ environment.BASE_URL_BACKEND }/profile/settings/account/me/${ id }`, { withCredentials : true })
  }

  public updateAcount ( user : User ) : Observable<User> {
    return this.http.put<User>(`${ environment.BASE_URL_BACKEND }/profile/settings/account/update/${ user.id }`, user,  { withCredentials : true, })
  };

  public deleteAccount ( id : string ) : Observable<void> {
    return this.http.delete<void>(`${ environment.BASE_URL_BACKEND }/profile/settings/account/delete/${ id }`, { withCredentials : true })
  }
}

