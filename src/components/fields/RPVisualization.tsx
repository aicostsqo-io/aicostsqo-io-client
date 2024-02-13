import React, { Suspense, useEffect, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useSiteContext } from "@/contexts/Site";
import axios from "axios";

const apiUrl =
  "https://e9d41ab0-814d-4a89-a904-f232c5bf0ffc-00-10dj332pi2cbu.spock.replit.dev";

type Urls = {
  obj: string;
  mtl: string;
};

type SceneProps = {
  urls: Urls;
};

function Scene({ urls }: SceneProps) {
  const mtl = useLoader(MTLLoader, `${apiUrl}${urls.mtl}`);
  const obj = useLoader(OBJLoader, `${apiUrl}${urls.obj}`, (loader) => {
    loader.setMaterials(mtl);
  });

  return <primitive object={obj} />;
}

const RPVisualization = () => {
  const [urls, setUrls] = useState<Urls | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { selectedRP } = useSiteContext();
  const camera = new PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(100, 160, 200);

  useEffect(() => {
    const fetchObj = async () => {
      setLoading(true);
      const res = await axios.post(`${apiUrl}/rp`, {
        filename: selectedRP._id,
        positionX: selectedRP.positionX,
        positionY: selectedRP.positionY,
        positionZ: selectedRP.positionZ,
        sizeX: selectedRP.sizeX,
        sizeY: selectedRP.sizeY,
        sizeZ: selectedRP.sizeZ,
      });
      setUrls({ obj: res.data.obj, mtl: res.data.mtl });
      setLoading(false);
    };

    fetchObj();
  }, [selectedRP]);

  if (loading) {
    return (
      <div className="h-full flex justify-center items-center text-5xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-row h-full gap-5">
      {urls && (
        <Canvas camera={camera}>
          <directionalLight position={[-100, 300, -300]} intensity={1.2} />
          <directionalLight position={[100, 300, 300]} intensity={1.2} />
          <directionalLight position={[100, -300, 300]} intensity={1.2} />
          <Suspense fallback={null}>
            <Scene urls={urls} />
          </Suspense>
          <axesHelper args={[125]} />
          <OrbitControls enablePan={true} makeDefault={true} />
        </Canvas>
      )}
    </div>
  );
};

export default RPVisualization;
