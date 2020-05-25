import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc4ngifComponent } from './exerc4ngif.component';

describe('Exerc4ngifComponent', () => {
  let component: Exerc4ngifComponent;
  let fixture: ComponentFixture<Exerc4ngifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc4ngifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc4ngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
