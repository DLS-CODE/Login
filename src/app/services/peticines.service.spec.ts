import { TestBed } from '@angular/core/testing';

import { PeticinesService } from './peticines.service';

describe('PeticinesService', () => {
  let service: PeticinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
