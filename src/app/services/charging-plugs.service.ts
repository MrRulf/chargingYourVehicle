import { openDataHubAnswerJSON } from './../shared/openDataHub-answer-json';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChargingPlug } from '../shared/charging-plug';

const URL: string = "https://mobility.api.opendatahub.bz.it/v2/flat%2Cnode/EChargingPlug";

@Injectable({
  providedIn: 'root'
})
export class ChargingPlugsService {

  constructor(private http: HttpClient) { }

  getAllPlugsFull(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&shownull=false&distinct=true`);
  }

  getAllStationPlugsFull(scode: string): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&where=pcode.eq.%22${scode}%22&shownull=false&distinct=true`);
  }

}
