import { openDataHubAnswerJSON } from './../shared/openDataHub-answer-json';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const URL: string = "https://mobility.api.opendatahub.bz.it/v2/flat%2Cnode/EChargingPlug";

@Injectable({
  providedIn: 'root'
})
export class ChargingPlugsService {

  constructor(private http: HttpClient) { }

  getAllPlugsFull(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&shownull=false&distinct=true`);
  }

  getAllPlugsLite(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&select=sactive%2Csavailable%2Cscode%2Cscoordinate%2Csmetadata&shownull=false&distinct=true`);
  }

  getAllStationPlugsFull(scode: string): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&where=pcode.eq.%22${scode}%22&shownull=false&distinct=true`);
  }

  getAllStationPlugsLite(scode: string): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&select=sactive%2Csavailable%2Cscode%2Cscoordinate%2Csmetadata&where=pcode.eq.%22${scode}%22&shownull=false&distinct=true`);
  }
}
