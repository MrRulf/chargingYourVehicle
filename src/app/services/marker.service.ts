import { ChargingPlugsService } from './charging-plugs.service';
import { popUpData } from './../shared/popUpData';
import { ChargingStationsService } from './charging-stations.service';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { PopupService } from './popup.service';
import { Areas } from '../shared/areas';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  constructor(
    private cs: ChargingStationsService,
    private ps: PopupService,
    private cp: ChargingPlugsService
  ) {}

  //Diese Methode setzt anhand des WebServices die marker
  makeCapitalMarkers(map: L.Map): void {
    this.cs.getAllStationsInCoordinatesFull(Areas.southtyrol).subscribe((answer) => {
      for (let i = 0; i < answer.data.length; i++) {
        let marker = L.marker([
          answer.data[i].scoordinate.y,
          answer.data[i].scoordinate.x,
        ]);
        this.cp.getAllStationPlugsFull(answer.data[i].scode).subscribe( plugs => {
          let pop: popUpData[] = [];
          for (let i=0; i< plugs.data.length; i++){
            pop.push({
              number: (i + 1).toString(),
              detail: plugs.data[i].smetadata.outlets.maxPower,
              occupied: plugs.data[i].savailable,
            })
          }
          marker.bindPopup(this.ps.makeCapitalPopup(pop));
          marker.addTo(map);
        });
      }
    });
  }
}
