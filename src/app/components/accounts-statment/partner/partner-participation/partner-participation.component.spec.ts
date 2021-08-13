import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerParticipationComponent } from './partner-participation.component';

describe('PartnerParticipationComponent', () => {
  let component: PartnerParticipationComponent;
  let fixture: ComponentFixture<PartnerParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerParticipationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
