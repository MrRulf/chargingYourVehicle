import { ChargingStationsService } from './services/charging-stations.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'cyv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  stations!: any;

  constructor(private cs: ChargingStationsService) {}

  ngOnInit(){
    this.cs.getAll().subscribe(response => {
      this.stations = response
      // for(let s of this.stations){
        console.log(this.stations.data.scoordinate.x);
        console.log(this.stations.data.scoordinate.y);
      // }
    });
  }
}

