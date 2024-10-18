import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BareInlineCalendarComponent } from './bare-inline-calendar.component';

describe('BareInlineCalendarComponent', () => {
  let component: BareInlineCalendarComponent;
  let fixture: ComponentFixture<BareInlineCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BareInlineCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BareInlineCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
