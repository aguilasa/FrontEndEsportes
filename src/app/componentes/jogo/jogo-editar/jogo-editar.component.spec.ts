import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoEditarComponent } from './jogo-editar.component';

describe('JogoEditarComponent', () => {
  let component: JogoEditarComponent;
  let fixture: ComponentFixture<JogoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
