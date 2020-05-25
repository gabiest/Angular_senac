import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc1ngifComponent } from './exerc1ngif.component';

describe('Exerc1ngifComponent', () => {
  let component: Exerc1ngifComponent;
  let fixture: ComponentFixture<Exerc1ngifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc1ngifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc1ngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
