import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCollectionComponent } from './money-collection.component';

describe('MoneyCollectionComponent', () => {
  let component: MoneyCollectionComponent;
  let fixture: ComponentFixture<MoneyCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
