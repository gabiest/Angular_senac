import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc6ngforComponent } from './exerc6ngfor.component';

describe('Exerc6ngforComponent', () => {
  let component: Exerc6ngforComponent;
  let fixture: ComponentFixture<Exerc6ngforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc6ngforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc6ngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
