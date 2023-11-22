export interface SeismicDisc {
  rectangleLineNumber: number;
  profileType: "" | "Longitudinal" | "Traversal";
  crackProfileNumber: number;
  typeOfCrack: string;
  typeOfDisc: string;
  dip: number;
  dipDirection: number;
  mapReferenceSystem: string;
  startingVertexX: number;
  startingVertexY: number;
  startingVertexZ: number;
  endVertexX: number;
  endVertexY: number;
  endVertexZ: number;
  nX: number;
  nY: number;
  nZ: number;
}
