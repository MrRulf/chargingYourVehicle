import { ChargingStationsService } from './services/charging-stations.service';
import { Component, OnInit} from '@angular/core';
import { ChargingStations } from './shared/charging-stations';

@Component({
  selector: 'cyv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  stations!: ChargingStations;

  constructor(private cs: ChargingStationsService) {}

  ngOnInit(){
    this.cs.getAll().subscribe(response => {
      this.stations = response;

        console.log(this.stations.scoordinate.x);

    });
  }
}

