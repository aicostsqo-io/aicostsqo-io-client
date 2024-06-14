/* eslint-disable */
import React, { Suspense, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { PerspectiveCamera, DoubleSide } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export type Urls = {
  objR: string;
  mtlR: string;
  objD: string;
  mtlD: string;
};

export type SceneProps = {
  urls: any;
  ambientLight?: boolean;
  cameraPosition?: [number, number, number];
};

function Scene({ urls }: SceneProps) {
  const mtlRP = urls?.rp?.mtl
    ? useLoader(
        MTLLoader,
        `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}${urls?.rp?.mtl}`,
        (loader) => {
          loader.setMaterialOptions({ side: DoubleSide });
        }
      )
    : null;
  const objRP =
    urls?.rp?.obj && mtlRP
      ? useLoader(
          OBJLoader,
          `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}${urls?.rp?.obj}`,
          (loader) => {
            loader.setMaterials(mtlRP);
          }
        )
      : null;
  const mtlDisc = urls?.disc?.mtl
    ? useLoader(
        MTLLoader,
        `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}${urls?.disc?.mtl}`,
        (loader) => {
          loader.setMaterialOptions({ side: DoubleSide });
        }
      )
    : null;
  const objDisc =
    urls?.disc?.mtl && mtlDisc
      ? useLoader(
          OBJLoader,
          `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}${urls?.disc?.obj}`,
          (loader) => {
            loader.setMaterials(mtlDisc);
          }
        )
      : null;

  return (
    <>
      {objRP ? <primitive object={objRP} /> : null}
      {objDisc ? <primitive object={objDisc} /> : null}
    </>
  );
}

const ObjectVisualizer = ({
  urls,
  cameraPosition = [100, 160, 200],
  ambientLight = true,
}: SceneProps) => {
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(cameraPosition[0], cameraPosition[1], cameraPosition[2]);

  return (
    urls && (
      <Canvas camera={camera}>
        <fog color="#3f7b9d" near={15} far={14} />
        {ambientLight ? (
          <ambientLight intensity={0.8} />
        ) : (
          <>
            <directionalLight position={[-100, 300, -300]} intensity={1.2} />
            <directionalLight position={[100, 300, 300]} intensity={1.2} />
          </>
        )}

        <Suspense fallback={null}>
          <Scene urls={urls} />
        </Suspense>
        <axesHelper args={[125]} />
        <OrbitControls enablePan={true} makeDefault={true} />
      </Canvas>
    )
  );
};

export default React.memo(ObjectVisualizer);
