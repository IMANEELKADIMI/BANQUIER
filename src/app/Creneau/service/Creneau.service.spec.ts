import { TestBed } from '@angular/core/testing';

import { CreneauService } from './Creneau.service';

describe('OperatorService', () => {
  let service: CreneauService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreneauService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
