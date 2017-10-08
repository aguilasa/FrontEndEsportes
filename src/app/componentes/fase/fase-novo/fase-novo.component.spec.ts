import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseNovoComponent } from './fase-novo.component';

describe('FaseNovoComponent', () => {
  let component: FaseNovoComponent;
  let fixture: ComponentFixture<FaseNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaseNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
