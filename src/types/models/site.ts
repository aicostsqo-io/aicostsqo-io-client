export interface Site {
  _id: string;
  name: string;
  numberOfVertex: number;
}

interface vertex {
  vertexNumber: number;
  coordX: number;
  coordY: number;
  coordZ?: number;
}

export interface SiteBound {
  _id?: string;
  siteId: string;
  mapReferenceSystem: string;
  vertexes: vertex[];
}
