import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Component } from './ex1.component';

describe('Ex1Component', () => {
  let component: Ex1Component;
  let fixture: ComponentFixture<Ex1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
