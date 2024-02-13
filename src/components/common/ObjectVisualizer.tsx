import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export type Urls = {
  obj: string;
  mtl: string;
};

export type SceneProps = {
  urls: Urls;
};

function Scene({ urls }: SceneProps) {
  const mtl = useLoader(
    MTLLoader,
    `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}${urls.mtl}`
  );
  const obj = useLoader(
    OBJLoader,
    `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}${urls.obj}`,
    (loader) => {
      loader.setMaterials(mtl);
    }
  );

  return <primitive object={obj} />;
}

const ObjectVisualizer = ({ urls }: SceneProps) => {
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(100, 160, 200);

  return (
    urls && (
      <Canvas camera={camera}>
        <directionalLight position={[-100, 300, -300]} intensity={1.2} />
        <directionalLight position={[100, 300, 300]} intensity={1.2} />
        <Suspense fallback={null}>
          <Scene urls={urls} />
        </Suspense>
        <axesHelper args={[125]} />
        <OrbitControls enablePan={true} makeDefault={true} />
      </Canvas>
    )
  );
};

export default ObjectVisualizer;
