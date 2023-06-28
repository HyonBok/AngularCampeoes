import { TestBed } from '@angular/core/testing';

import { CampeaoService } from './campeao.service';

describe('CampeaoService', () => {
  let service: CampeaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CampeaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
