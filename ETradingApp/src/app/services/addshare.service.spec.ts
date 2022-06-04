import { TestBed } from '@angular/core/testing';

import { AddshareService } from './addshare.service';

describe('AddshareService', () => {
  let service: AddshareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddshareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
