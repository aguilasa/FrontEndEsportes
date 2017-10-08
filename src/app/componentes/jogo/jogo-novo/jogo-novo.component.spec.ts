import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoNovoComponent } from './jogo-novo.component';

describe('JogoNovoComponent', () => {
  let component: JogoNovoComponent;
  let fixture: ComponentFixture<JogoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
