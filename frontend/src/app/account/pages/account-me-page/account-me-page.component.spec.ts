import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountMePageComponent } from './account-me-page.component';

describe('AccountMePageComponent', () => {
  let component: AccountMePageComponent;
  let fixture: ComponentFixture<AccountMePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountMePageComponent]
    });
    fixture = TestBed.createComponent(AccountMePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
