import { TestBed } from '@angular/core/testing';

import { VehicleService2 } from './vehicle.service';

describe('VehicleService', () => {
  let service: VehicleService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
