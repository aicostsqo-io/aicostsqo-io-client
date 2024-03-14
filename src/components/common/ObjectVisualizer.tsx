import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { PerspectiveCamera, DoubleSide } from "three";
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
    `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}${urls.mtl}`,
    (loader) => {
      loader.setMaterialOptions({ side: DoubleSide });
    }
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
        <fog color="hotpink" near={1} far={10} />
        <ambientLight intensity={0.8} />
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
