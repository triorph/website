import { TestBed } from '@angular/core/testing';

import { PageChoiceService } from './page-choice.service';

describe('PageChoiceService', () => {
  let service: PageChoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PageChoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
