import { TestBed } from '@angular/core/testing';

import { FetcDataService } from './fetc-data.service';

describe('FetcDataService', () => {
  let service: FetcDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetcDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
