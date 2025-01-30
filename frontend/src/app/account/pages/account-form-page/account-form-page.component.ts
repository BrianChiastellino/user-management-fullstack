import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-account-form-page',
  templateUrl: './account-form-page.component.html',
  styleUrls: ['./account-form-page.component.css']
})

export class AccountFormPageComponent implements OnInit {

  public user: User | null = null;

  constructor (
    private authService: AuthService,

  ) {}

  ngOnInit(): void {
    this.authService.user$.pipe(
      tap(user => console.log({ userFromAccount: user })),  // Verificar valor antes de suscribirse
    ).subscribe(user => {
      console.log({ data: user });  // Aquí obtenemos el valor del usuario
      this.user = user;  // Asignamos el valor a la variable local 'user'
    });
  }
}

