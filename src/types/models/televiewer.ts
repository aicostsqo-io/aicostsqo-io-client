import { TeleviewerDisc } from "./televiewerDisc";

export interface Televiewer {
  type: "" | "Optical" | "Acoustic";
  sizeX: number;
  sizeY: number;
  sizeZ: number;
  positionX: number;
  positionY: number;
  positionZ: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  holeNumber: number;
  xHole: string;
  yHole: string;
  zHole: string;
  holeVerticalAngle: string;
  direction: string;
  lengthOfHole: number;
  diameterCore: number;
  explanation: string;
  imageDimensionA: number;
  imageDimensionB: number;
  perimeterX: number;
  zSliceZ: number;
  radiusPixels: number;
  discs: TeleviewerDisc[];
}
