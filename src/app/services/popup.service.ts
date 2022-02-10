import { popUpData } from './../shared/popUpData';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}

  //Diese Methode gibt als String das Template des Popups zurueck
  makeCapitalPopup(data: Array<popUpData>): string {
    let ret: string = `<table style="width: 300px">`;
    for (let i = 0; i < data.length; i++) {
      ret = ret + `
      <tr>
        <td>Säule: ${data[i].number}</td>
        <td>Stärke: ${data[i].detail} kW</td>`;
        if (data[i].available) {
          ret = ret + `<td style="background-color: green; color: white">Frei</td>
          </tr>`;
        } else {
          ret = ret + `<td style="background-color: red; color: white">Besetzt</td>
          </tr>`;
        }

    }
    return ret + `</table>`;
  }
}
