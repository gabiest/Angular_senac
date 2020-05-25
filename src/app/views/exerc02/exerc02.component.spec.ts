import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc02Component } from './exerc02.component';

describe('Exerc02Component', () => {
  let component: Exerc02Component;
  let fixture: ComponentFixture<Exerc02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
