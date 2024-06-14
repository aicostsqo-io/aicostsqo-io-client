import React, { useEffect } from "react";
import ObjectVirtualizer from "./ObjectVirtualizer";
import { useTreeContext } from "@/contexts/Tree";
import axios from "axios";
import { getDiscsByRpId } from "@/api/disc";

const fetchDiscObj = async (rp: any, discs: any) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}/disc`,
    {
      filename: rp._id,
      positionX: rp.positionX,
      positionY: rp.positionY,
      positionZ: rp.positionZ,
      sizeX: rp.sizeX,
      sizeY: rp.sizeY,
      sizeZ: rp.sizeZ,
      data: discs.map((d: any) => ({
        dip: d.dip,
        dipDirection: d.dipDirect,
        positionX: d.pX,
        positionY: d.pY,
        positionZ: d.pZ,
      })),
    }
  );
  console.log("resDiscObj", res);
  return { obj: res.data.obj, mtl: res.data.mtl };
};

const fetchRPObj = async (rp: any) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}/rp`,
    {
      filename: rp._id,
      positionX: 0,
      positionY: 0,
      positionZ: 0,
      sizeX: rp.sizeX,
      sizeY: rp.sizeY,
      sizeZ: rp.sizeZ,
    }
  );
  console.log("resRPObj", res);
  return { obj: res.data.obj, mtl: res.data.mtl };
};

const CustomObjectVirtualizationContainer = () => {
  const { visualizationShowList } = useTreeContext();
  const [urls, setUrls] = React.useState<any>(null);
  useEffect(() => {
    const loadData = async () => {
      const urlData: any = {};
      try {
        const rp = visualizationShowList.find(
          (item: any) => item?.type === "RP"
        );
        const discRP = visualizationShowList.find(
          (item: any) => item?.type === "Scanline"
        );
        if (rp) {
          const res = await fetchRPObj(rp);
          urlData["rp"] = res;
        }
        if (discRP) {
          const resDiscs = await getDiscsByRpId(discRP?._id);
          const res = await fetchDiscObj(discRP, resDiscs.data.discs);
          urlData["disc"] = res;
        }
        console.log("urlData", urlData);
        setUrls(urlData);
      } catch (err) {
        console.log(err);
      }
    };
    loadData();
  }, [visualizationShowList]);

  // const urls = {
  //   objR: "/static/rp/6535403294aadbbcb802957b.obj",
  //   mtlR: "/static/rp/6535403294aadbbcb802957b.mtl",
  //   objD: "/static/disc/6535403294aadbbcb802957b.obj",
  //   mtlD: "/static/disc/6535403294aadbbcb802957b.mtl",
  // };
  return <ObjectVirtualizer urls={urls} />;
};

export default CustomObjectVirtualizationContainer;
