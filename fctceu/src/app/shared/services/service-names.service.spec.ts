import { TestBed } from '@angular/core/testing';

import { ServiceNamesService } from './service-names.service';

describe('ServiceNamesService', () => {
  let service: ServiceNamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceNamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
