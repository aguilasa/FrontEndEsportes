import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaseEditarComponent } from './fase-editar.component';

describe('FaseEditarComponent', () => {
  let component: FaseEditarComponent;
  let fixture: ComponentFixture<FaseEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaseEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaseEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
