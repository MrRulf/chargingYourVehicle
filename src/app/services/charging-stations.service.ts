import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChargingStationsService {

  url: string = "https://mobility.api.opendatahub.bz.it/v2/flat%2Cnode/EChargingStation?limit=200&distinct=true";
  response!: any;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Object> {
    return this.http.get(this.url);
  }

}
