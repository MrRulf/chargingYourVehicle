import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { openDataHubAnswerJSON } from '../shared/openDataHub-answer-json';

const URL: string = "https://mobility.api.opendatahub.bz.it/v2/flat%2Cnode/EChargingStation";
@Injectable({
  providedIn: 'root'
})
export class ChargingStationsService {

  constructor(private http: HttpClient) { }

  getAllStations(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&distinct=true`);
  }

}
