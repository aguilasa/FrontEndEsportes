import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseListComponent } from './fase-list.component';

describe('FaseListComponent', () => {
  let component: FaseListComponent;
  let fixture: ComponentFixture<FaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
