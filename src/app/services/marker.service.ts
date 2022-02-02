import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient) { }

  makeCapitalMarkers(map: L.Map): void {
    const lon = 10.9;
    const lat = 49.8;
    const marker = L.marker([lat, lon]);
    marker.addTo(map);
   }
}
