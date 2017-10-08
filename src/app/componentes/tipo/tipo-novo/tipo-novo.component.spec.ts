import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoNovoComponent } from './tipo-novo.component';

describe('TipoNovoComponent', () => {
  let component: TipoNovoComponent;
  let fixture: ComponentFixture<TipoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
