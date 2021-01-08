import { TestBed } from '@angular/core/testing';

import { Ex3Service } from './ex3.service';

describe('Ex3Service', () => {
  let service: Ex3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
