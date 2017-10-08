import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeNovoComponent } from './modalidade-novo.component';

describe('ModalidadeNovoComponent', () => {
  let component: ModalidadeNovoComponent;
  let fixture: ComponentFixture<ModalidadeNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalidadeNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadeNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
