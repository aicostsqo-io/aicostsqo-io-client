export interface MagnetometricDisc {
  rectangleLineNumber: Number;
  profileType: "" | "Longitudinal" | "Traversal";
  crackProfileNumber: Number;
  typeOfCrack: String;
  typeOfDisc: String;
  dip: Number;
  dipDirection: Number;
  mapReferenceSystem: string;
  startingVertexX: Number;
  startingVertexY: Number;
  startingVertexZ: Number;
  endVertexX: Number;
  endVertexY: Number;
  endVertexZ: Number;
  nX: Number;
  nY: Number;
  nZ: Number;
}
