import { TestBed } from '@angular/core/testing';

import { BareInlineCalendarService } from './bare-inline-calendar.service';

describe('BareInlineCalendarService', () => {
  let service: BareInlineCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BareInlineCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
