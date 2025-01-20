import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';

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

  public onDelete (): void {
    this.accountService.deleteAcount().subscribe( () => {
      this.router.navigateByUrl('auth/login');
    });
  };

  public onuUpdate () : void {
    this.accountService.updateAcount().subscribe( data => {
      console.log({ data });
    });
  };

}
