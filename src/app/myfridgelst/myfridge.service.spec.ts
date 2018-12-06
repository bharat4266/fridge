import { TestBed } from '@angular/core/testing';

import { MyfridgeService } from './myfridge.service';

describe('MyfridgeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyfridgeService = TestBed.get(MyfridgeService);
    expect(service).toBeTruthy();
  });
});
