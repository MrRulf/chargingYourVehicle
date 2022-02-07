import { ChargingStationsService } from './services/charging-stations.service';
import { Component, OnInit} from '@angular/core';
import { ChargingStation } from './shared/charging-station';
@Component({
  selector: 'cyv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public stations!: ChargingStation[];

  constructor(private cs: ChargingStationsService) {}

  ngOnInit(){
    this.cs.getAllStations().subscribe(answer => {
      this.stations = answer.data;
      console.log(stations);
      console.log(this.stations.length);
      for (let i = 0; i < this.stations.length; i++) {
        console.log(this.stations[i].scode);
      }
    });
  }
}

