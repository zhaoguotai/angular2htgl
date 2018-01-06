import { TestBed, inject } from '@angular/core/testing';

import { ProduceShareService } from './produce-share.service';

describe('ProduceShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProduceShareService]
    });
  });

  it('should ...', inject([ProduceShareService], (service: ProduceShareService) => {
    expect(service).toBeTruthy();
  }));
});
