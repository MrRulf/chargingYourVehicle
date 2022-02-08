import { sMetadata } from './s-metadata';
import { Coordinates } from './coordinates';

export class ChargingStation {

  public sactive!: boolean;
  public savailable!: boolean;
  public scode!: string;
  public scoordinate!: Coordinates;
  public smetadata!: sMetadata;
  public sname!: string;
  public sorigin!: string;
  public stype!: string;

}
