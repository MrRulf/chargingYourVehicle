import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { openDataHubAnswerJSON } from '../shared/openDataHub-answer-json';
import { Area } from '../shared/area';
import { ODHService } from '../shared/odh-service';

const URL: string = "https://mobility.api.opendatahub.bz.it/v2/flat%2Cnode/EChargingStation";
@Injectable({
  providedIn: 'root'
})
export class ChargingStationsService extends ODHService {

  constructor(http: HttpClient) {
    super(http);
  }

  getAllFull(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&shownull=false&distinct=true`);
  }

  getAllLite(): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&select=sactive%2Csavailable%2Cscode%2Cscoordinate&shownull=false&distinct=true`);
  }

  getAllInCoordinatesFull(area: Area): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&where=scoordinate.bbi.%28${area.xLeft}%2C${area.yUp}%2C${area.xRight}%2C${area.yDown}%29&shownull=false&distinct=true`);
  }

  getAllInCoordinatesLite(area: Area): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&select=sactive%2Csavailable%2Cscode%2Cscoordinate&where=scoordinate.bbi.%28${area.xLeft}%2C${area.yUp}%2C${area.xRight}%2C${area.yDown}%29&shownull=false&distinct=true`);
  }

  getAllStationFull(scode: string): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&where=scode.eq.%22${scode}%22&shownull=false&distinct=true`);
  }

  getAllStationLite(scode: string): Observable<openDataHubAnswerJSON> {
    return this.http.get<openDataHubAnswerJSON>(`${URL}?limit=-1&select=sactive%2Csavailable%2Cscode%2Cscoordinate%2Csmetadata&where=scode.eq.%22${scode}%22&shownull=false&distinct=true`);
  }

}
