import { sMetadataCar } from './s-metadata-car';
import { Coordinates } from './coordinates';

export class ChargingStation {

  public sactive!: boolean;
  public savailable!: boolean;
  public scode!: string;
  public scoordinate!: Coordinates;
  public smetadata!: sMetadataCar;
  public sname!: string;
  public sorigin!: string;
  public stype!: string;

}