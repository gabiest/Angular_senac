import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc2ngifComponent } from './exerc2ngif.component';

describe('Exerc2ngifComponent', () => {
  let component: Exerc2ngifComponent;
  let fixture: ComponentFixture<Exerc2ngifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc2ngifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc2ngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
