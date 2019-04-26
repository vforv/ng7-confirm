import { TestBed } from '@angular/core/testing';

import { ListenConfirmationService } from './listen-confirmation.service';

describe('ListenConfirmationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListenConfirmationService = TestBed.get(ListenConfirmationService);
    expect(service).toBeTruthy();
  });
});
