import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Area } from '../shared/area';
import { openDataHubAnswerJSON } from '../shared/openDataHub-answer-json';

// BIKE_CHARGER
// BIKE_CHARGER_BAY

const URL: string = "https://mobility.api.opendatahub.bz.it/v2/flat%2Cnode/BIKE_CHARGER";
@Injectable({
  providedIn: 'root'
})
export class BikeStationsService {

  constructor(private http: HttpClient) { }

  getAllStationsFull(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&shownull=false&distinct=true`);
  }

  getAllStationsLite(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&select=sactive%2Csavailable%2Cscode%2Cscoordinate&shownull=false&distinct=true`);
  }

  getAllStationsInCoordinatesFull(area: Area): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&where=scoordinate.bbi.%28${area.xLeft}%2C${area.yUp}%2C${area.xRight}%2C${area.yDown}%29&shownull=false&distinct=true`);
  }

  getAllStationsInCoordinatesLite(area: Area): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&select=sactive%2Csavailable%2Cscode%2Cscoordinate&where=scoordinate.bbi.%28${area.xLeft}%2C${area.yUp}%2C${area.xRight}%2C${area.yDown}%29&shownull=false&distinct=true`);
  }
}
