import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDeletePageComponent } from './account-delete-page.component';

describe('AccountDeletePageComponent', () => {
  let component: AccountDeletePageComponent;
  let fixture: ComponentFixture<AccountDeletePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountDeletePageComponent]
    });
    fixture = TestBed.createComponent(AccountDeletePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
