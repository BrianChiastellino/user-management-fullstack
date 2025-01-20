import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { switchMap, tap } from 'rxjs';
import { User } from 'src/app/auth/models/user.model';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  public form : FormGroup = this.fb.group({
    id: [{ value: '', disabled: true }], // Campo readonly
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    document: ['', [Validators.required]],
    role: [{ value: '', disabled: true }], // Campo readonly
    active_account: [false],
    createdAt: [{ value: '', disabled: true }], // Campo readonly
    updateAt: [{ value: '', disabled: true }], // Campo readonly
  }) ;

  constructor (
    private fb: FormBuilder,
    private accountService : AccountService,
    private authService : AuthService,
    private router : Router,
  ) {}

  ngOnInit(): void {
    this.getAccount();
  }

  public getAccount () : void {
    this.accountService.getAccount().subscribe( user => {
      if ( !user )
        return console.error({ user });

        this.form.patchValue( user );
      });
  }

  public onSubmit (): void {
    if (this.form.valid) {
      console.log('Form data:', this.form.getRawValue());
    }
  }

  /// SwitchMap espera a que se ejecute el deleteAccout y despues sigue con el logout
  public onDelete(): void {
    this.accountService.deleteAccount().pipe(
        tap( wasDeletedUser => console.log({ wasDeletedUser })),
        switchMap(() => this.authService.logout())
    ).subscribe(() => {
        this.router.navigateByUrl('auth/login');
    });
}


  public onUpdate () : void {
    if ( this.form.valid) {
      const updatedUser : User = this.form.value;
      console.log(`Usuario actualizado: ${ updatedUser }`);
      this.accountService.updateAcount( updatedUser ).subscribe( data => {
        console.log({ data });
      });
    }
  };

}
