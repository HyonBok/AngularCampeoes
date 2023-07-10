import { TestBed } from '@angular/core/testing';

import { CampeoesService } from './campeoes.service';

describe('CampeoesService', () => {
  let service: CampeoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampeoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
