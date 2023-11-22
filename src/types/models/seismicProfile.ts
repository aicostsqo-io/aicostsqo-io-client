export interface SeismicProfile {
  seismicMeasurementId: number;
  shape: "" | "Line" | "Mesh";
  profileNumber: number;
  endsOfSeismicProfile: number;
  seismicProfileDirectory: string;
  explanation: string;
}
