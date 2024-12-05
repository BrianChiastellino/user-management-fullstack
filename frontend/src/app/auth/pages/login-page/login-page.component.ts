import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IUser } from '../../models/user.interface';
import { User } from '../../models/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  ) {};

  public submitForm() {
    if ( !this.loginForm.valid)
      return;

    this.login();
  }

  private login () {
    const email = this.loginForm.controls['email'].value;
    const password = this.loginForm.controls['password'].value;

    this.authService.login( email, password ).subscribe( jwtToken => {
      console.log({ jwtToken });
    });


  }






}