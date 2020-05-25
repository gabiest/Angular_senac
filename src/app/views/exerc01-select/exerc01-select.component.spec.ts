import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc01SelectComponent } from './exerc01-select.component';

describe('Exerc01SelectComponent', () => {
  let component: Exerc01SelectComponent;
  let fixture: ComponentFixture<Exerc01SelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc01SelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc01SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
