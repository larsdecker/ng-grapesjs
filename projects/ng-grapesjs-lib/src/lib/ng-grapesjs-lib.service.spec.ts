import { TestBed } from '@angular/core/testing';

import { NgGrapesjsLibService } from './ng-grapesjs-lib.service';

describe('NgGrapesjsLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgGrapesjsLibService = TestBed.get(NgGrapesjsLibService);
    expect(service).toBeTruthy();
  });
});
