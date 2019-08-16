import { TestBed } from '@angular/core/testing';

import { BleLibService } from './ble-lib.service';

describe('BleLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BleLibService = TestBed.get(BleLibService);
    expect(service).toBeTruthy();
  });
});
