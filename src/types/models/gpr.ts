import { GprDisc } from "./gprDisc";
import { GprProfile } from "./gprProfile";

export interface Gpr {
  rectangleNumber: Number;
  shape: String;
  longitudinalProfileNumber: Number;
  traversalProfileNumber: Number;
  distance: Number;
  spacing: Number;
  dimension: String;
  positionX: Number;
  positionY: Number;
  positionZ: Number;
  antenna: String;
  longitudinalProfilesDirectory: String;
  longitudinalProfilesMaxDepth: Number;
  longitudinalProfilesMaxDistance: Number;
  traversalProfilesDirectory: String;
  traversalProfilesMaxDepth: Number;
  traversalProfilesMaxDistance: Number;
  mapReferenceSystemForStartOfLongitudinalProfiles: Number;
  mapReferenceSystemForStartOfTransversalProfiles: Number;
  vertex1: {
    startOfLongitudinalProfilesX: Number;
    startOfLongitudinalProfilesY: Number;
    startOfLongitudinalProfilesZ: Number;
    endOfLongitudinalProfilesX: Number;
    endOfLongitudinalProfilesY: Number;
    endOfLongitudinalProfilesZ: Number;
    startOfTraversalProfilesX: Number;
    startOfTraversalProfilesY: Number;
    startOfTraversalProfilesZ: Number;
    endOfTraversalProfilesX: Number;
    endOfTraversalProfilesY: Number;
    endOfTraversalProfilesZ: Number;
  };
  vertex2: {
    startOfLongitudinalProfilesX: Number;
    startOfLongitudinalProfilesY: Number;
    startOfLongitudinalProfilesZ: Number;
    endOfLongitudinalProfilesX: Number;
    endOfLongitudinalProfilesY: Number;
    endOfLongitudinalProfilesZ: Number;
    startOfTraversalProfilesX: Number;
    startOfTraversalProfilesY: Number;
    startOfTraversalProfilesZ: Number;
    endOfTraversalProfilesX: Number;
    endOfTraversalProfilesY: Number;
    endOfTraversalProfilesZ: Number;
  };
  explanation: String;
  discs: GprDisc[];
  profiles: GprProfile[];
}
