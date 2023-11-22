import { MagnetometricDisc } from "./magnetometricDisc";

export interface Magnetometric {
  magnetometricMeasurementId: Number;
  profileNumber: Number;
  latitudeMin: Number;
  longitudeMin: Number;
  altitudeMin: Number;
  latitudeMax: Number;
  longitudeMax: Number;
  altitudeMax: Number;
  magnetometricProfileDirectory: String;
  explanation: String;
  discs: MagnetometricDisc[];
}
