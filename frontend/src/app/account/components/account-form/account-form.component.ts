import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  public form : FormGroup;

  constructor (
    private fb: FormBuilder,
    private accountService : AccountService,
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      document: ['', [Validators.required]],
      role: [{ value: '', disabled: true }], // Campo readonly
      active_account: [false],
      createdAt: [{ value: '', disabled: true }], // Campo readonly
      updateAt: [{ value: '', disabled: true }], // Campo readonly
    });
  }

  ngOnInit(): void {
    this.getAccount();
  }

  public getAccount () : void {
    this.accountService.getAccount().subscribe( user => {
      console.log({ user });
      if ( !user )
        return console.error({ user });

        this.form.patchValue( user );
      });
  }

  public onSubmit(): void {
    if (this.form.valid) {
      console.log('Form data:', this.form.getRawValue());
    }
  }

  public onDelete(): void {
    console.log('Account deletion requested');
  }

}
