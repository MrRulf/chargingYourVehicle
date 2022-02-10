import { BikeStation } from "./bike-station";
import { Coordinates } from "./coordinates";
import { pMetadataBike } from "./p-metadata-bike";

export class BikePlug extends BikeStation {
    public pactive!: boolean;
    public pavailable!: boolean;
    public pcode!: string;
    public pcoordinate!: Coordinates;
    public pmetadata!: pMetadataBike;
    public pname!: string;
    public porigin!: string;
    public ptype!: string;
}