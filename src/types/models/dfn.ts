export interface DFN {
  _id: string;
  rpId: string;
  discontinuitySetId: number;
  shape: string;
  type: string;
  dip: number;
  dipDirection: number;
  expectationTraceLength: number;
  spacing: number;
  fisherK: number;
  mu: number;
  mean: number;
  std: number;
  frictionAngle: number;
  location: string;
  persistence: string;
  orientation: string;
  fractureIntensity: string;
  intensityValue: number;
  createdAt: string | Date;
  // TODO:  WTF is this SHITs
  //   positionX: number;
  //   positionY: number;
  //   positionZ: number;
  //   vertex2: {
  //     x: number;
  //     y: number;
  //     z: number;
  //   };
  //   vertex3: {
  //     x: number;
  //     y: number;
  //     z: number;
  //   };
  //   vertex4: {
  //     x: number;
  //     y: number;
  //     z: number;
  //   };
  objFileName: string;
  mtlFileName: string;
}
