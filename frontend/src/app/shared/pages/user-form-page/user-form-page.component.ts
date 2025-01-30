import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs';
import { AccountService } from 'src/app/account/services/account.service';
import { User } from 'src/app/auth/models/user.model';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user-form-page',
  templateUrl: './user-form-page.component.html',
  styleUrls: ['./user-form-page.component.css']
})
export class UserFormPageComponent implements OnChanges {

  @Input() user : User | null = null;
  @Input() isAdmin : boolean = false;

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
    private fb : FormBuilder,
    private accountService : AccountService,
    private authService : AuthService,
    private router : Router,

  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log( `${ this.user }, user changes` );

    if ( !this.user ) {
      console.log( this.user );
    }

    this.form.patchValue( this.user! );
  }

  public onDelete(): void {

    if ( this.form.valid ) {
      const { id } = this.form.value;

      this.accountService.deleteAccount( id ).pipe(
        tap(wasDeletedUser => console.log({ wasDeletedUser })),

        map( () => {
          if ( this.user!.role == 'admin' )
            return;
        }),


      ).subscribe( () => {
        this.authService.logout();
        this.router.navigateByUrl('auth/login');
      });
    }
  }

  public onUpdate () : void {
    if ( this.form.valid) {
      const updatedUser : User = this.form.value;

      console.log({ updatedUser });

      this.accountService.updateAcount( updatedUser ).subscribe( data => {
        console.log({ data });
      });
    }
  };

}
