import { VehicleType } from "./vehicle-type";

export class popUpData {
  public number!: string;
  public detail!: string;
  public available: boolean | null = null;
  public vehicleType!: VehicleType;
}