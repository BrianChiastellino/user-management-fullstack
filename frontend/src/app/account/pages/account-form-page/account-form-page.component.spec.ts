import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountFormPageComponent } from './account-form-page.component';

describe('AccountFormPageComponent', () => {
  let component: AccountFormPageComponent;
  let fixture: ComponentFixture<AccountFormPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountFormPageComponent]
    });
    fixture = TestBed.createComponent(AccountFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
