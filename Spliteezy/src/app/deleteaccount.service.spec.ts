import { TestBed } from '@angular/core/testing';

import { DeleteaccountService } from './deleteaccount.service';

describe('DeleteaccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeleteaccountService = TestBed.get(DeleteaccountService);
    expect(service).toBeTruthy();
  });
});
