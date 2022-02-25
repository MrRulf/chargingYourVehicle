import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Area } from "./area";
import { openDataHubAnswerJSON } from "./openDataHub-answer-json";

export abstract class ODHService {

  constructor(protected http: HttpClient) { }

  abstract getAllFull(): Observable<openDataHubAnswerJSON>;

  abstract getAllLite(): Observable<openDataHubAnswerJSON>;

  abstract getAllInCoordinatesFull(area: Area): Observable<openDataHubAnswerJSON>;

  abstract getAllInCoordinatesLite(area: Area): Observable<openDataHubAnswerJSON>;

  abstract getAllStationFull(scode: string): Observable<openDataHubAnswerJSON>;

  abstract getAllStationLite(scode: string): Observable<openDataHubAnswerJSON>;
}
