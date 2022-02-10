import { Coordinates } from "./coordinates";
import { sMetadataBike } from "./s-metadata-bike";

export class BikeStation {

  public sactive!: boolean;
  public savailable!: boolean;
  public scode!: string;
  public scoordinate!: Coordinates;
  public smetadata!: sMetadataBike;
  public sname!: string;
  public sorigin!: string;
  public stype!: string;

}