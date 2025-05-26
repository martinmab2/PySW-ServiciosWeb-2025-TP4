import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, catchError, throwError } from 'rxjs';
import { VehicleDetails, CarExample } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarMakerService {
  private headers: HttpHeaders;
  private readonly exampleVins: CarExample[] = [
    { vin: '1ZVFT82H855176627', year: '2005', description: 'Ford Mustang GT' },
    { vin: 'JH4NA1157MT001586', year: '1991', description: 'Acura NSX' },
    { vin: 'WDDGF4HB7CA617686', year: '2012', description: 'Mercedes-Benz C-Class' },
  ];

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders()
      .set('X-RapidAPI-Key', environment.carApiKey)
      .set('X-RapidAPI-Host', environment.carApiHost)
      .set('Content-Type', 'application/json');
  }

  getExampleVins(): CarExample[] {
    return this.exampleVins;
  }

  decodeVin(vin: string, year: string): Observable<VehicleDetails> {
    const data = { vin, year };
    console.log('Request Headers:', this.headers);
    console.log('Request Data:', data);
    
    return this.http.post<VehicleDetails>(
      `${environment.carApiUrl}/v2/vin-decoder/decode`,
      data,
      { headers: this.headers }
    ).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ha ocurrido un error en el servidor.';
    
    if (error.status === 404) {
      errorMessage = 'VIN no encontrado o inválido';
    } else if (error.status === 429) {
      errorMessage = 'Se ha excedido el límite de peticiones a la API.';
    } else if (error.status === 403) {
      errorMessage = 'Error de autenticación con la API.';
    }
    
    console.error('Error details:', error);
    return throwError(() => errorMessage);
  }
}
