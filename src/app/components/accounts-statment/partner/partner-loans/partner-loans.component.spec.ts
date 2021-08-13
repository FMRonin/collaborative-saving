import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerLoansComponent } from './partner-loans.component';

describe('PartnerLoansComponent', () => {
  let component: PartnerLoansComponent;
  let fixture: ComponentFixture<PartnerLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
