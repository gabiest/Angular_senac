import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc01Component } from './exerc01.component';

describe('Exerc01Component', () => {
  let component: Exerc01Component;
  let fixture: ComponentFixture<Exerc01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
