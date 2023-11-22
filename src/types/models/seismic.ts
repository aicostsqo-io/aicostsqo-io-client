import { SeismicDisc } from "./seismicDisc";
import { SeismicProfile } from "./seismicProfile";

export interface Seismic {
  measurementId: number;
  shape: string;
  profilNumber: number;
  geophones: number;
  spacing: number;
  shots: number;
  length: number;
  locationAngle: number;
  profileLocationX: number;
  profileLocationY: number;
  profileLocationZ: number;
  endOfTheSeismicProfile: number;
  discs: SeismicDisc[];
  profiles: SeismicProfile[];
}
