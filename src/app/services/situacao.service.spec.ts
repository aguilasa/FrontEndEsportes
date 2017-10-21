import { TestBed, inject } from '@angular/core/testing';

import { SituacaoService } from './situacao.service';

describe('SituacaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SituacaoService]
    });
  });

  it('should be created', inject([SituacaoService], (service: SituacaoService) => {
    expect(service).toBeTruthy();
  }));
});
