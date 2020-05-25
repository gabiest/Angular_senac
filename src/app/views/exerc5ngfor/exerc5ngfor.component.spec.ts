import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc5ngforComponent } from './exerc5ngfor.component';

describe('Exerc5ngforComponent', () => {
  let component: Exerc5ngforComponent;
  let fixture: ComponentFixture<Exerc5ngforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc5ngforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc5ngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
