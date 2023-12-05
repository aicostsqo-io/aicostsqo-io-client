import L from "leaflet";

export interface FormattedProfile {
  filname: string | null;
  numberOfProfile: Number | null;
  startCoords: L.LatLngExpression;
  endCoords: L.LatLngExpression;
  color: string;
}

export interface MapProfile {
  longitudes: FormattedProfile[];
  transversals: FormattedProfile[];
}
