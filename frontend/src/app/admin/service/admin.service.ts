import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.model';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject.asObservable();

  constructor(
    private http: HttpClient,
  ) {}

  public getUsers () : void{
    this.http.get<User[]>(`${ environment.BASE_URL_BACKEND }/admin/getAll`, { withCredentials : true })
    .subscribe( users => this.usersSubject.next( users ));
  }

  public deleteUser ( id : string ) : void {
    const deleteUser = this.usersSubject.getValue().filter( user => user.id !== id);
    console.log({ deleteUser });
    this.usersSubject.next( deleteUser );
  }
}
