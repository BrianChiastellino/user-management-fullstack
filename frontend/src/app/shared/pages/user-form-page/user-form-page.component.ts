import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { concatMap, first, map, of, switchMap, tap } from 'rxjs';
import { AccountService } from 'src/app/account/services/account.service';
import { AdminService } from 'src/app/admin/service/admin.service';
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
    private adminService : AdminService,
    private router : Router,

  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log( `${ this.user }, user changes` );

    if ( !this.user ) {
      console.log( this.user );
    }

    this.form.patchValue( this.user! );
  }

  //todo: termianr delete y updated
  public onDelete(): void {
    if ( !this.form.valid )
      return console.error('Formulario inválido:', this.form.value);

    const id = this.form.controls['id'].value;
    const role = this.form.controls['role'].value;

    console.log({ id, role });

    if ( !id )
      return console.error('Error: El ID es undefined', this.form.value);

    //switchMap	Cancela la petición anterior si llega una nueva. Solo ejecuta la última.
    //concatMap	Espera a que termine la actual antes de ejecutar la siguiente.

    if ( role !== 'admin') {
      this.accountService.deleteAccount(id).pipe(
        switchMap(() => this.authService.user$.pipe(
          first(),
          switchMap(user => (user?.id === id ? this.authService.logout() : of(null))),
        ))
      ).subscribe(() => {
        this.router.navigateByUrl('/auth/login');
      });
    } else {
      alert('No se pueden eliminar adminstradores');
    };
  };


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
