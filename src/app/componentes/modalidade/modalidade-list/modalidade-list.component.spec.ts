import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeListComponent } from './modalidade-list.component';

describe('ModalidadeListComponent', () => {
  let component: ModalidadeListComponent;
  let fixture: ComponentFixture<ModalidadeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalidadeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalidadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
