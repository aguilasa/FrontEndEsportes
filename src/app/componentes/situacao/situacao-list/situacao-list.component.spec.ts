import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacaoListComponent } from './situacao-list.component';

describe('SituacaoListComponent', () => {
  let component: SituacaoListComponent;
  let fixture: ComponentFixture<SituacaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
