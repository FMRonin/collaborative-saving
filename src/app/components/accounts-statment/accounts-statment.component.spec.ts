import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsStatmentComponent } from './accounts-statment.component';

describe('AccountsStatmentComponent', () => {
  let component: AccountsStatmentComponent;
  let fixture: ComponentFixture<AccountsStatmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsStatmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsStatmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
