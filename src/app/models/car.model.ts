export interface CarExample {
  vin: string;
  year: string;
  description: string;
}

export interface VehicleDetails {
  make: string;
  model: string;
  modelYear: string;
  trim?: string;
  bodyClass?: string;
  engineConfiguration?: string;
  engineNumberOfCylinders?: string;
  fuelTypePrimary?: string;
  doors?: string;
  displacementL?: string;
  engineBrakeHpFrom?: string;
  vehicleType?: string;
}
