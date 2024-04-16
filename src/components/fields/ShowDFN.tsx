import { getById, getByRpId } from "@/api/dfn";
import { useSiteContext } from "@/contexts/Site";
import { DFN } from "@/types/models/dfn";
import React, { Fragment, useEffect, useState } from "react";
import ObjectVisualizer from "../common/ObjectVisualizer";
import Loading from "../common/Loading";

function ShowDFN() {
  const { selectedRP } = useSiteContext();
  const [dfns, setDFNs] = useState<DFN[]>();
  const [selectedDFN, setSelectedDFN] = useState<DFN>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const dfns = await getByRpId(selectedRP._id);
      setDFNs(dfns.data.dfns);
    };

    fetchData();
  }, [selectedRP]);

  const getDFN = async (id: string) => {
    if (id == selectedDFN?._id) return;
    setLoading(true);
    const dfn = await getById(id);
    setSelectedDFN(dfn.data.dfn);
    setLoading(false);
  };

  return (
    <Fragment>
      <div className="h-full w-full">
        {dfns && dfns.length > 0 ? (
          <div className="my-10 mx-5">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Fracture Intensity</th>
                  <th className="py-3 px-6 text-left">Fisher K</th>
                  <th className="py-3 px-6 text-left">Persistence</th>
                  <th className="py-3 px-6 text-left">Mean</th>
                  <th className="py-3 px-6 text-left">Std</th>
                  <th className="py-3 px-6 text-left">Created At</th>
                  <th className="py-3 px-6 text-left">Actions</th>
                  {/* TODO: <th className="py-3 px-6 text-left">ReCalculate</th> */}
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {dfns.map((dfn: DFN) => (
                  <tr key={dfn._id} className="border-b border-gray-200">
                    <td className="py-3 px-6 text-left">
                      {dfn.fractureIntensity}
                    </td>
                    <td className="py-3 px-6 text-left">{dfn.fisherK}</td>
                    <td className="py-3 px-6 text-left">{dfn.persistence}</td>
                    <td className="py-3 px-6 text-left">{dfn.mean}</td>
                    <td className="py-3 px-6 text-left">{dfn.std}</td>
                    <td className="py-3 px-6 text-left">
                      {dfn.createdAt.toString()}
                    </td>
                    <td className="py-3 px-6 text-left">
                      <button
                        onClick={() => {
                          getDFN(dfn._id);
                        }}
                      >
                        Show
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="h-full flex justify-center items-center text-5xl font-bold">
            No DFN
          </div>
        )}
      </div>
      <div className="h-full w-full">
        {loading ? (
          <Loading />
        ) : (
          selectedDFN && (
            <ObjectVisualizer
              urls={{
                obj: selectedDFN.objFileName,
                mtl: selectedDFN.mtlFileName,
              }}
            />
          )
        )}
      </div>
    </Fragment>
  );
}

export default ShowDFN;
