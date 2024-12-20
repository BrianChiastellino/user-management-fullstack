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

  public getAccount () : Observable<User | null> {
    //Habilitamos credentials para enviar las cookies
    return this.http.get<User>(`${ environment.BASE_URL_BACKEND }/profile/settings/account/me`, { withCredentials : true })
  }

  public updateAcount () : void {

  };

  public deleteAcount () : void {

  }
}

