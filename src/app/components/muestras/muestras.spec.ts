import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Muestras } from './muestras';

describe('Muestras', () => {
  let component: Muestras;
  let fixture: ComponentFixture<Muestras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Muestras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Muestras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
