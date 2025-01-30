import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private http: HttpClient,
  ) { }

  public getUsers () : Observable<User[]> {
    return this.http.get<User[]>(`${ environment.BASE_URL_BACKEND }/admin/getAll`, { withCredentials : true })
  }
}
