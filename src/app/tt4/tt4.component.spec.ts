import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tt4Component } from './tt4.component';

describe('Tt4Component', () => {
  let component: Tt4Component;
  let fixture: ComponentFixture<Tt4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tt4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tt4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
