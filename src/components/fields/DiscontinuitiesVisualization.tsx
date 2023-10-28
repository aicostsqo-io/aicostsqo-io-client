import React, { useEffect, useRef } from "react";
import { useSiteContext } from "@/contexts/Site";
import * as M from "marble-disc";
import { getDiscsByRpId } from "@/api/disc";

const DiscontinuitiesVisualization = () => {
  const { selectedRP } = useSiteContext();
  const marbleRef = useRef(null);
  const [clearFunction, setClearFunction] = React.useState<any>(null);
  const [discontinuities, setDiscontinuities] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<boolean>(false);

  console.log("selectedRP : ", selectedRP);

  useEffect(() => {
    if (!selectedRP) return;
    getDiscsByRpId(selectedRP?._id)
      .then((res) => {
        setDiscontinuities(res.data.discs);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      marbleRef.current = null;
      console.log(clearFunction);
      if (clearFunction) {
        console.log("clearing function");
        clearFunction();
      }
      console.warn("test çıkıldı ve temizlendi");
    };
  }, []);

  useEffect(() => {
    if (!!discontinuities && discontinuities.length > 0) {
      setLoading(true);
      const mrbl = new M.Marble(
        marbleRef.current,
        selectedRP.sizeX,
        selectedRP.sizeY,
        selectedRP.sizeZ
      );

      const showAndHideDiscontinuities = async () => {
        try {
          console.log("mrbl : ", mrbl.showDiscontinuities);
          await mrbl.showDiscontinuities(discontinuities);
          console.log("test");
          setLoading(false);
        } catch (error) {
          // Hata yönetimi
          console.error("Hata: ", error);
        }
      };

      showAndHideDiscontinuities();

      setClearFunction(() => mrbl.clear);
    }
  }, [discontinuities]);

  if (discontinuities?.length === 0) return <div>No Disc</div>;

  return (
    <div className="flex flex-row h-full">
      <div className="w-full flex justify-center items-center">
        <div className="w-full h-full">
          {loading && <div className="text-3xl font-bold">Loading...</div>}
          <div className="w-full h-full" ref={marbleRef}></div>
        </div>
      </div>
    </div>
  );
};

export default DiscontinuitiesVisualization;
