import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeNovoComponent } from './time-novo.component';

describe('TimeNovoComponent', () => {
  let component: TimeNovoComponent;
  let fixture: ComponentFixture<TimeNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
