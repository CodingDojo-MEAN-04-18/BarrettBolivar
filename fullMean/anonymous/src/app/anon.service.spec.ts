import { TestBed, inject } from '@angular/core/testing';

import { AnonService } from './anon.service';

describe('AnonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnonService]
    });
  });

  it('should be created', inject([AnonService], (service: AnonService) => {
    expect(service).toBeTruthy();
  }));
});
