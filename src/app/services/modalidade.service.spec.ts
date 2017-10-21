import { TestBed, inject } from '@angular/core/testing';

import { ModalidadeService } from './modalidade.service';

describe('ModalidadeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalidadeService]
    });
  });

  it('should be created', inject([ModalidadeService], (service: ModalidadeService) => {
    expect(service).toBeTruthy();
  }));
});
