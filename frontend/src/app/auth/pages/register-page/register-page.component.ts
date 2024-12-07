import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  public registerForm : FormGroup = this.fb.group({
    username: ['', Validators.required ],
    email:    ['',  Validators.required ],
    password: ['', Validators.required ],
    document: ['', Validators.required ],
  })

  constructor (
    private fb : FormBuilder,
    private router: Router,
    private authService : AuthService,
  ) {}

  public submitForm () {
    if ( !this.registerForm.valid )
      return console.error('Error en fomrulario registro');

    this.register();
  }

  private register() {
    const user: User = new User(
      this.registerForm.get('username')!.value,
      this.registerForm.get('email')!.value,
      this.registerForm.get('password')!.value,
      this.registerForm.get('document')!.value,
    );

    console.log({ user });
    this.authService.register( user ).subscribe( dbUser => {
      console.log({ dbUser });


      this.router.navigateByUrl('auth/login');
    })
  }



}
