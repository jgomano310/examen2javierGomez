import { TestBed } from '@angular/core/testing';

import { ServicioCrudService } from './servicio-crud.service';

describe('ServicioCrudService', () => {
  let service: ServicioCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
