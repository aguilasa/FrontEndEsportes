import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoEditarComponent } from './situacao-editar.component';

describe('SituacaoEditarComponent', () => {
  let component: SituacaoEditarComponent;
  let fixture: ComponentFixture<SituacaoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituacaoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacaoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
