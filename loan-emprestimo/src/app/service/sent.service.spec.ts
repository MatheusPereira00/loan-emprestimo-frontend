import { TestBed } from '@angular/core/testing';

import { SentService } from './sent.service';

describe('SentService', () => {
  let service: SentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
