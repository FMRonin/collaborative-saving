import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundInformationComponent } from './fund-information.component';

describe('FundInformationComponent', () => {
  let component: FundInformationComponent;
  let fixture: ComponentFixture<FundInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
