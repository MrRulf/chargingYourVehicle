import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { openDataHubAnswerJSON } from '../shared/openDataHub-answer-json';
import { Area } from '../shared/area';

const URL: string = "https://mobility.api.opendatahub.bz.it/v2/flat%2Cnode/EChargingStation";
@Injectable({
  providedIn: 'root'
})
export class ChargingStationsService {

  constructor(private http: HttpClient) { }

  getAllStationsFull(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&shownull=false&distinct=true`);
  }

  getAllStationsInCoordinatesFull(area: Area): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&where=scoordinate.bbi.%28${area.xLeft}%2C${area.yUp}%2C${area.xRight}%2C${area.yDown}%29&shownull=false&distinct=true`);
  }

}
