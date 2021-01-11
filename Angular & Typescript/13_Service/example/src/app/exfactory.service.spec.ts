import { TestBed } from '@angular/core/testing';

import { ExfactoryService } from './exfactory.service';

describe('ExfactoryService', () => {
  let service: ExfactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExfactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
