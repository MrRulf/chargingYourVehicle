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
import { ODHService } from '../shared/odh-service';

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
  ) { }

  makeCapitalMarkers(map: L.Map): void {
    this.makeServiceCapitalMarkers(map, this.cs, this.cp, VehicleType.Car);
    this.makeServiceCapitalMarkers(map, this.bs, this.bp, VehicleType.Bike);
  }

  makeServiceCapitalMarkers(map: L.Map, stationService: ODHService, plugService: ODHService, type: VehicleType): void {
    stationService.getAllInCoordinatesLite(Areas.southtyrol).subscribe(stations => {
      for (let i = 0; i < stations.data.length; i++) {
        let marker = L.marker([
          stations.data[i].scoordinate.y,
          stations.data[i].scoordinate.x,
        ]);
        plugService.getAllStationLite(stations.data[i].scode).subscribe(plugs => {
          let pop: popUpData[] = [];
          for (let j = 0; j < plugs.data.length; j++) {
            let power: string = "";
            try {
              power = plugs.data[j].smetadata.outlets[0].maxPower;
              if (power != "-1") {
                power = power + " kW";
              }
            } catch {}
            pop.push({
              number: (j + 1).toString(),
              detail: power,
              active: plugs.data[j].sactive,
              vehicleType: type
            });
          }
          marker.bindPopup(this.ps.makeCapitalPopup(pop, stations.data[i].scoordinate));
          marker.addTo(map);
        });
      }
    });
  }
}
