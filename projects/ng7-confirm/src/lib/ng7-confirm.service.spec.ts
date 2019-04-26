import { TestBed } from '@angular/core/testing';

import { Ng7ConfirmService } from './ng7-confirm.service';

describe('Ng7ConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng7ConfirmService = TestBed.get(Ng7ConfirmService);
    expect(service).toBeTruthy();
  });
});
