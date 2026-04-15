import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrossel2 } from './carrossel-2';

describe('Carrossel2', () => {
  let component: Carrossel2;
  let fixture: ComponentFixture<Carrossel2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrossel2],
    }).compileComponents();

    fixture = TestBed.createComponent(Carrossel2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
