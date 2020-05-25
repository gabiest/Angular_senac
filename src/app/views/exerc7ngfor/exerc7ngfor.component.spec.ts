import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc7ngforComponent } from './exerc7ngfor.component';

describe('Exerc7ngforComponent', () => {
  let component: Exerc7ngforComponent;
  let fixture: ComponentFixture<Exerc7ngforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc7ngforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc7ngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
