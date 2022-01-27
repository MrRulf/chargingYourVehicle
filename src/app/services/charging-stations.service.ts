import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChargingStationsService {

  url: string = "https://mobility.api.opendatahub.bz.it/v2/EChargingStation";
  response: string = "";

  constructor(private http: HttpClient) { }

  getAll(){
    this.http.get<any>(this.url).subscribe(data => {
        this.response = data;
    });
    console.log("test");
    console.log(this.response);
  }

}
