import { TestBed } from '@angular/core/testing';

import { ExclassService } from './exclass.service';

describe('ExclassService', () => {
  let service: ExclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
