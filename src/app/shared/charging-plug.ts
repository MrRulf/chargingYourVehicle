import { ChargingStation } from "./charging-station";
import { Coordinates } from "./coordinates";
import { pMetadataCar } from "./p-metadata-car";

export class ChargingPlug extends ChargingStation {
    public pactive!: boolean;
    public pavailable!: boolean;
    public pcode!: string;
    public pcoordinate!: Coordinates;
    public pmetadata!: pMetadataCar;
    public pname!: string;
    public porigin!: string;
    public ptype!: string;
}
