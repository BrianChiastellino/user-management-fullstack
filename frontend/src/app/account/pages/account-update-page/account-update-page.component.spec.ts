import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountUpdatePageComponent } from './account-update-page.component';

describe('AccountUpdatePageComponent', () => {
  let component: AccountUpdatePageComponent;
  let fixture: ComponentFixture<AccountUpdatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountUpdatePageComponent]
    });
    fixture = TestBed.createComponent(AccountUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
