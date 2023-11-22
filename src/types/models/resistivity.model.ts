import { ResistivityContour } from "./resistivityContour";

export interface Resistivity {
  resistivityMeasurementId: number;
  profileNumber: number;
  latitudeMin: number;
  longitudeMin: number;
  altitudeMin: number;
  latitudeMax: number;
  longitudeMax: number;
  altitudeMax: number;
  depth: number;
  distance: number;
  resistivity: number;
  resistivityProfileDirectory: string;
  explanation: string;
  contours: ResistivityContour[];
}
