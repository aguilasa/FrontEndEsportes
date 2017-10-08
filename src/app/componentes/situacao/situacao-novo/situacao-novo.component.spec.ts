import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoNovoComponent } from './situacao-novo.component';

describe('SituacaoNovoComponent', () => {
  let component: SituacaoNovoComponent;
  let fixture: ComponentFixture<SituacaoNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituacaoNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacaoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
