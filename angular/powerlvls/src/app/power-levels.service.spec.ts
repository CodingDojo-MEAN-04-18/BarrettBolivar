import { TestBed, inject } from '@angular/core/testing';

import { PowerLevelsService } from './power-levels.service';

describe('PowerLevelsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PowerLevelsService]
    });
  });

  it('should be created', inject([PowerLevelsService], (service: PowerLevelsService) => {
    expect(service).toBeTruthy();
  }));
});
