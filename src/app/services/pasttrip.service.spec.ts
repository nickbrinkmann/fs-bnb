import { TestBed } from '@angular/core/testing';

import { PasttripService } from './pasttrip.service';

describe('PasttripService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PasttripService = TestBed.get(PasttripService);
    expect(service).toBeTruthy();
  });
});
