import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadDetallesComponent } from './actividad-detalles.component';

describe('ActividadDetallesComponent', () => {
  let component: ActividadDetallesComponent;
  let fixture: ComponentFixture<ActividadDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
