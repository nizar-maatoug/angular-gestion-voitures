import { TestBed } from '@angular/core/testing';

import { VoituresService } from './voitures.service';

describe('VoituresService', () => {
  let service: VoituresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoituresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
