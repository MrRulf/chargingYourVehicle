import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { openDataHubAnswerJSON } from '../shared/openDataHub-answer-json';

const URL: string = "https://mobility.api.opendatahub.bz.it/v2/flat%2Cnode/EChargingPlug";
@Injectable({
  providedIn: 'root'
})
export class BikePlugsService {

  constructor(private http: HttpClient) { }

  getAllPlugsFull(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&shownull=false&distinct=true`);
  }

  getAllPlugsLite(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&select=smetadata%2C%20savailable&shownull=false&distinct=true`);
  }

  getAllStationPlugsFull(scode: string): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&where=pcode.eq.%22${scode}%22&shownull=false&distinct=true`);
  }

  getAllStationPlugsLite(scode: string): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&select=smetadata%2C%20savailable&where=pcode.eq.%22${scode}%22&shownull=false&distinct=true`);
  }
}
