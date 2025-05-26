import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercadoVehiculosComponent } from './mercado-vehiculos.component';

describe('MercadoVehiculosComponent', () => {
  let component: MercadoVehiculosComponent;
  let fixture: ComponentFixture<MercadoVehiculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercadoVehiculosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercadoVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
