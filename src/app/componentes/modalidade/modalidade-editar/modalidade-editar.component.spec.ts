import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeEditarComponent } from './modalidade-editar.component';

describe('ModalidadeEditarComponent', () => {
  let component: ModalidadeEditarComponent;
  let fixture: ComponentFixture<ModalidadeEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalidadeEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
