import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pipe, tap } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent {

  public loginForm : FormGroup = this.fb.group({
    identificador : ['', Validators.required ],
    password : ['', Validators.required ]
  });

  constructor (
    private authService : AuthService,
    private fb : FormBuilder,
    private router: Router,
  ) {};

  public submitForm() {
    if ( !this.loginForm.valid)
      return console.error('Error en formulario login');

    this.login();
  }

  private login() {
    const identificador = this.loginForm.controls['identificador'].value;
    const password = this.loginForm.controls['password'].value;

    this.authService.login(identificador, password)
      .pipe(
        tap(user => console.log('Usuario logueado :', user)),
        tap( () => alert('Cuenta logueada con éxito!')),
    )
      .subscribe(user => {
        if (!user)
          return console.error('Error al obtener token');

        switch ( user.role ) {
          case 'admin': this.router.navigateByUrl('/admin');
          break;

          case 'user': this.router.navigateByUrl('/account');
          break;

          default: this.router.navigateByUrl('/auth');
          break;
        }
      });


  }






}
