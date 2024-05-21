import { TestBed } from '@angular/core/testing';

import { LocalStorage } from './localstorage.service';

describe('Localstorage', () => {
  let service: LocalStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
