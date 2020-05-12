import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersPaymentsTableComponent } from './others-payments-table.component';

describe('OthersPaymentsTableComponent', () => {
  let component: OthersPaymentsTableComponent;
  let fixture: ComponentFixture<OthersPaymentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthersPaymentsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthersPaymentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
