import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEditarComponent } from './time-editar.component';

describe('TimeEditarComponent', () => {
  let component: TimeEditarComponent;
  let fixture: ComponentFixture<TimeEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
