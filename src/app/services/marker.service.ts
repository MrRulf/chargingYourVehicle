import { popUpData } from './../shared/popUpData';
import { ChargingStationsService } from './charging-stations.service';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { PopupService } from './popup.service';

const TEST: popUpData[] = [
  {
    number: '1',
    detail: '3',
    occupied: true,
  },
  {
    number: '2',
    detail: '5',
    occupied: false,
  }
];

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  constructor(
    private cs: ChargingStationsService,
    private popupService: PopupService
  ) {}

  //Diese Methode setzt anhand des WebServices die marker
  makeCapitalMarkers(map: L.Map): void {
    this.cs.getAllStationsInCoordinates().subscribe((answer) => {
      for (let i = 0; i < answer.data.length; i++) {
        let marker = L.marker([
          answer.data[i].scoordinate.y,
          answer.data[i].scoordinate.x,
        ]);

        marker.bindPopup(this.popupService.makeCapitalPopup(TEST));
        marker.addTo(map);
      }
    });
  }
}
