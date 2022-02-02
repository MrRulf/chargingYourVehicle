import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChargingStations } from '../shared/charging-stations';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChargingStationsService {

  url: string = "https://mobility.api.opendatahub.bz.it/v2/flat%2Cnode/EChargingStation?limit=200&distinct=true";
  private chargingS!: ChargingStations[];

  constructor(private http: HttpClient) { }

  getAll(): Observable<ChargingStations> {
    return this.http.get<any>(this.url)
        // Webservice liefert ein Json-Objekt mit dem Namen rows zurück in dem das Array
        // gespeichert ist
        .pipe(
          map(response => response.rows),
          map(stations => this.chargingS = stations)
        );
  }

}
