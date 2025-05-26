import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarMakerService } from '../../services/car-maker.service';
import { VehicleDetails, CarExample } from '../../models/car.model';

@Component({
  selector: 'app-mercado-vehiculos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mercado-vehiculos.component.html',
  styleUrls: ['./mercado-vehiculos.component.css']
})
export class MercadoVehiculosComponent {
  exampleVins: CarExample[];
  selectedVehicle: VehicleDetails | null = null;
  loading = false;
  error: string | null = null;

  constructor(private carService: CarMakerService) {
    this.exampleVins = this.carService.getExampleVins();
  }

  decodeVin(vin: string, year: string): void {
    this.loading = true;
    this.error = null;
    this.selectedVehicle = null;

    this.carService.decodeVin(vin, year).subscribe({
      next: (data: VehicleDetails) => {
        this.selectedVehicle = data;
        this.loading = false;
      },
      error: (err: string) => {
        this.error = err;
        this.loading = false;
      }
    });
  }
}
