import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc3ngifComponent } from './exerc3ngif.component';

describe('Exerc3ngifComponent', () => {
  let component: Exerc3ngifComponent;
  let fixture: ComponentFixture<Exerc3ngifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc3ngifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc3ngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
