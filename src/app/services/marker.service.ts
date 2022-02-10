import { Injectable } from '@angular/core';
import * as L from 'leaflet';

import { ChargingPlugsService } from './charging-plugs.service';
import { ChargingStationsService } from './charging-stations.service';
import { BikeStationsService } from './bike-stations.service';
import { BikePlugsService } from './bike-plugs.service';
import { PopupService } from './popup.service';

import { popUpData } from './../shared/popUpData';
import { Areas } from '../shared/areas';
import { VehicleType } from '../shared/vehicle-type';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  constructor(
    private ps: PopupService,
    private cs: ChargingStationsService,
    private cp: ChargingPlugsService,
    private bs: BikeStationsService,
    private bp: BikePlugsService
  ) {}

  makeCapitalMarkers(map: L.Map): void {
    this.cs.getAllStationsInCoordinatesLite(Areas.southtyrol).subscribe(stations => {
      for (let i = 0; i < stations.data.length; i++) {
        let marker = L.marker([
          stations.data[i].scoordinate.y,
          stations.data[i].scoordinate.x,
        ]);
        this.cp.getAllStationPlugsLite(stations.data[i].scode).subscribe(plugs => {
          let pop: popUpData[] = [];
          for (let j = 0; j < plugs.data.length; j++){
            pop.push({
              number: (j + 1).toString(),
              detail: plugs.data[j].smetadata.outlets[0].maxPower + " kW",
              available: plugs.data[j].savailable,
              vehicleType: VehicleType.Car
            });
          }
          marker.bindPopup(this.ps.makeCapitalPopup(pop));
          marker.addTo(map);
        });
      }
    });
    
    this.bs.getAllStationsInCoordinatesLite(Areas.southtyrol).subscribe(stations => {
      for (let i = 0; i < stations.data.length; i++) {
        let marker = L.marker([
          stations.data[i].scoordinate.y,
          stations.data[i].scoordinate.x
        ]);
        this.bp.getAllStationPlugsLite(stations.data[i].scode).subscribe(plugs => {
          let pop: popUpData[] = [];
          for (let j = 0; j < plugs.data.length; j++){
            pop.push({
              number: (j + 1).toString(),
              detail: "",
              available: plugs.data[j].savailable,
              vehicleType: VehicleType.Bike
            });
          }
          marker.bindPopup(this.ps.makeCapitalPopup(pop));
          marker.addTo(map);
        });
      }
    })
  }
}
