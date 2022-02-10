import { popUpData } from './../shared/popUpData';
import { Injectable } from '@angular/core';
import { VehicleType } from '../shared/vehicle-type';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() { }

  //Diese Methode gibt als String das Template des Popups zurueck
  makeCapitalPopup(data: popUpData[]): string {
    let ret: string = `<table style="width: 300px">`;
    for (let i = 0; i < data.length; i++) {
      ret = ret + `
      <tr>
        <td>Plug: ${data[i].number}</td>
        <td>${data[i].detail}</td>`;
      if (data[i].available !== null) {
        if (data[i].available) {
          ret = ret + `<td style="background-color: green; color: white; text-align: center;">`;
        } else {
          ret = ret + `<td style="background-color: red; color: white; text-align: center;">`
        }
      } else {
        ret = ret + `<td style="background-color: gray; color: white; text-align: center;">`
      }
      switch (data[i].vehicleType) {
        case VehicleType.Car:
          ret = ret + `🚗</td></tr>`;
          break;
        case VehicleType.Bike:
          ret = ret + `🚲</td></tr>`;
          break;
        default:
          ret = ret + `</td></tr>`;
          break;
      }
    }
    return ret + `</table>`;
  }
}
