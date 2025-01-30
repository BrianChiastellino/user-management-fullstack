import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFormsPageComponent } from './users-forms-page.component';

describe('UsersFormsPageComponent', () => {
  let component: UsersFormsPageComponent;
  let fixture: ComponentFixture<UsersFormsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersFormsPageComponent]
    });
    fixture = TestBed.createComponent(UsersFormsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
