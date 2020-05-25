import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exerc8ngforComponent } from './exerc8ngfor.component';

describe('Exerc8ngforComponent', () => {
  let component: Exerc8ngforComponent;
  let fixture: ComponentFixture<Exerc8ngforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exerc8ngforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exerc8ngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
