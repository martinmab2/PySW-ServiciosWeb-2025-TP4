import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorDeImagenesComponent } from './generador-de-imagenes.component';

describe('GeneradorDeImagenesComponent', () => {
  let component: GeneradorDeImagenesComponent;
  let fixture: ComponentFixture<GeneradorDeImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneradorDeImagenesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneradorDeImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
