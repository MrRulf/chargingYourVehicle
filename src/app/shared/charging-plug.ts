import { Coordinates } from "./coordinates";
import { pMetadata } from "./p-metadata";
import { sMetadata } from "./s-metadata";

export class ChargingPlug {
    public pactive!: boolean;
    public pavailable!: boolean;
    public pcode!: string;
    public pcoordinate!: Coordinates;
    public pmetadata!: sMetadata;
    public pname!: string;
    public porigin!: string;
    public ptype!: string;
    public sactive!: boolean;
    public savailable!: boolean;
    public scode!: string;
    public scoordinate!: Coordinates;
    public smetadata!: pMetadata;
    public sname!: string;
    public sorigin!: string;
    public stype!: string;
}
