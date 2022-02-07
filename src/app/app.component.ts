import { Component, OnInit } from '@angular/core';
// service example
/* import { ChargingStationsService } from './services/charging-stations.service';
import { ChargingStation } from './shared/charging-station'; */
@Component({
  selector: 'cyv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // service example
  /* public stations!: ChargingStation[]; */

  constructor(
    // service example
    /* private cs: ChargingStationsService */
  ) { }

  ngOnInit() {
    // service example
    /* this.cs.getAllStations().subscribe(answer => {
      this.stations = answer.data;
      console.log(this.stations);
      console.log(this.stations.length);
      for (let i = 0; i < this.stations.length; i++) {
        console.log(this.stations[i].scode);
      }
    }); */
  }
}

