import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerService {
  constructor(private http: HttpClientModule) {}

  getPassengers(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(environment.apiKey);
  }
}
