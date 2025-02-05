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

  public onDelete(): void {
    if ( !this.form.valid )
      return console.error('Formulario inválido:', this.form.value);

    const id = this.form.controls['id'].value;
    const role = this.form.controls['role'].value;

    console.log({ id, role });

    if ( !id )
      return console.error('Error: El ID es undefined', this.form.value);



    if (role !== 'admin') {                               // 🔹 Solo permite eliminar usuarios que NO sean administradores
      this.accountService.deleteAccount(id).pipe(         // 🛑 1. Elimina el usuario en la API
        switchMap(() => this.authService.user$.pipe(      // 🔁 3. Obtiene el usuario actual
          first(),                                        // 🔹 Solo toma el primer valor (evita múltiples ejecuciones)

          tap( user => {
            console.log( user!.id, id)
            if ( user!.id == id )                         // 🔥 4. Si el usuario eliminado es el actual, lo desloguea
              this.authService.logout().subscribe( () => this.router.navigateByUrl('/auth/login'));                                                          // 🔄 5. Redirige al login si el usuario eliminado era el actual
          })
        )),
        tap( () => alert('Cuenta eliminada con exito!')),
      ).subscribe(() => this.adminService.deleteUser( id ));
    } else {
      alert('No se pueden eliminar administradores');
    };

  };


  //todo: Terminar el updated
  public onUpdate () : void {
    if ( !this.form.valid )
      return console.error('Formulario inválido:', this.form.value);

    const id = this.form.controls['id'].value;
    const user : User = this.form.value;

    console.log({ id, user });

    this.accountService.updateAcount(user, id)
    .pipe(
      tap( () => alert('Cuenta actualizada con éxito')),
    )
    .subscribe( userUpdate => console.log({userUpdate}))

  };

}
