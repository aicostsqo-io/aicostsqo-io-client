import React, { Fragment, useEffect, useState } from "react";
import { useSiteContext } from "@/contexts/Site";
import axios from "axios";
import { getDiscsByRpId } from "@/api/disc";
import ObjectVisualizer, { Urls } from "../common/ObjectVisualizer";
import Loading from "../common/Loading";
import { toast } from "react-toastify";

const distributionSizeTypes = [
  {
    name: "Exponential",
    value: "exp",
  },
  {
    name: "Log Normal",
    value: "log",
  },
  {
    name: "Determinant",
    value: "det",
  },
];
type DistributionSizeType = "exp" | "log" | "det";
interface DfnCalculationModel {
  maxFractureCount: number;
  fisherConstant: number;
  distributionSize: DistributionSizeType;
  meanFractureSize: number;
  sigmaFractureSize: number;
}

const DFNVisualization = () => {
  const [dfnUrls, setDfnUrls] = useState<Urls | null>(null);
  const [discUrls, setDiscUrls] = useState<Urls | null>(null);
  const [discLoading, setDiscLoading] = useState<boolean>(false);
  const [dfnLoading, setDfnLoading] = useState<boolean>(false);
  const [dfnCalculation, setDfnCalculation] = useState<DfnCalculationModel>({
    distributionSize: "log",
    fisherConstant: 23,
    maxFractureCount: 7,
    meanFractureSize: 0.725,
    sigmaFractureSize: 0.52,
  } as DfnCalculationModel);
  const { selectedRP } = useSiteContext();

  useEffect(() => {
    fetchDiscData();
  }, [selectedRP]);

  const fetchDiscData = async () => {
    const res = await getDiscsByRpId(selectedRP?._id);
    await fetchDiscObj(res.data.discs);
  };

  const fetchDfnData = async () => {
    const res = await getDiscsByRpId(selectedRP?._id);
    await fetchDfnObj(res.data.discs);
  };

  const fetchDfnObj = async (discs: any) => {
    setDfnLoading(true);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}/dfn`,
      {
        filename: selectedRP._id,
        positionX: selectedRP.positionX,
        positionY: selectedRP.positionY,
        positionZ: selectedRP.positionZ,
        sizeX: selectedRP.sizeX,
        sizeY: selectedRP.sizeY,
        sizeZ: selectedRP.sizeZ,
        maxFractureCount: dfnCalculation.maxFractureCount,
        fisherConstant: dfnCalculation.fisherConstant,
        distributionSize: dfnCalculation.distributionSize,
        meanFractureSize: dfnCalculation.meanFractureSize,
        sigmaFractureSize: dfnCalculation.sigmaFractureSize,
        data: discs.map((rp: any) => ({
          dip: rp.dip,
          dipDirection: rp.dipDirect,
          positionX: rp.pX,
          positionY: rp.pY,
          positionZ: rp.pZ,
        })),
      }
    );
    const newDfnUrls = { obj: res.data.obj, mtl: res.data.mtl };
    setDfnUrls(newDfnUrls);
    setDfnLoading(false);
  };

  const fetchDiscObj = async (discs: any) => {
    setDiscLoading(true);
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_MARBLE_API_ENDPOINT}/disc`,
      {
        filename: selectedRP._id,
        positionX: selectedRP.positionX,
        positionY: selectedRP.positionY,
        positionZ: selectedRP.positionZ,
        sizeX: selectedRP.sizeX,
        sizeY: selectedRP.sizeY,
        sizeZ: selectedRP.sizeZ,
        data: discs.map((d: any) => ({
          dip: d.dip,
          dipDirection: d.dipDirect,
          positionX: d.pX,
          positionY: d.pY,
          positionZ: d.pZ,
        })),
      }
    );
    setDiscUrls({ obj: res.data.obj, mtl: res.data.mtl });
    setDiscLoading(false);
  };

  const handleCalculateDfn = async () => {
    if (
      !dfnCalculation ||
      !dfnCalculation?.maxFractureCount ||
      !dfnCalculation?.fisherConstant ||
      !dfnCalculation?.distributionSize ||
      !dfnCalculation?.meanFractureSize ||
      !dfnCalculation?.sigmaFractureSize
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    if (
      !(
        dfnCalculation?.fisherConstant <= 0 ||
        dfnCalculation?.fisherConstant >= 2
      )
    ) {
      toast.error("fisher_constant value mustn't be between 0 and 2");
      return;
    }

    await fetchDfnData();
  };

  return (
    <Fragment>
      <div className="flex flex-row">
        <div className="m-2">
          <label className="text-lg">Max Fracture Count: </label>
          <input
            type="number"
            min={2}
            value={dfnCalculation?.maxFractureCount}
            onChange={(e) =>
              setDfnCalculation((prev) => ({
                ...prev,
                maxFractureCount: Number(e.target.value),
              }))
            }
            className="border border-black py-2 px-4 rounded-xl"
            placeholder="Max Fracture Count"
          />
        </div>
        <div className="m-2">
          <label className="text-lg">Fisher Constant (Kappa): </label>
          <input
            type="number"
            value={dfnCalculation?.fisherConstant}
            onChange={(e) =>
              setDfnCalculation((prev) => ({
                ...prev,
                fisherConstant: Number(e.target.value),
              }))
            }
            className="border border-black py-2 px-4 rounded-xl"
            placeholder="Fisher Constant"
          />
        </div>
        <div className="m-2">
          <label className="text-lg">Distribution Size</label>
          <select
            className="border border-black py-2 px-4 rounded-xl"
            value={dfnCalculation?.distributionSize}
            onChange={(e) =>
              setDfnCalculation((prev) => ({
                ...prev,
                distributionSize: e.target.value as DistributionSizeType,
              }))
            }
          >
            <option value={""}>Select Distribution Size</option>
            {distributionSizeTypes?.map((item: any, index: number) => (
              <option key={index} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="m-2">
          <label className="text-lg">Mean Fracture Size: </label>
          <input
            type="number"
            value={dfnCalculation?.meanFractureSize}
            onChange={(e) =>
              setDfnCalculation((prev) => ({
                ...prev,
                meanFractureSize: Number(e.target.value),
              }))
            }
            className="border border-black py-2 px-4 rounded-xl"
            placeholder="Mean Fracture Size"
          />
        </div>
        <div className="m-2">
          <label className="text-lg">Sigma Fracture Size: </label>
          <input
            type="number"
            value={dfnCalculation?.sigmaFractureSize}
            onChange={(e) =>
              setDfnCalculation((prev) => ({
                ...prev,
                sigmaFractureSize: Number(e.target.value),
              }))
            }
            className="border border-black py-2 px-4 rounded-xl"
            placeholder="Sigma Fracture Size"
          />
        </div>
        <button
          type="button"
          className="ml-2 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleCalculateDfn}
        >
          Calculate DFN
        </button>
      </div>
      <div className="w-full h-full columns-2">
        <div className="h-full w-full">
          {discLoading ? (
            <Loading />
          ) : (
            discUrls && <ObjectVisualizer urls={discUrls} />
          )}
        </div>

        <div className="h-full w-full">
          {dfnLoading ? (
            <Loading />
          ) : (
            dfnUrls && <ObjectVisualizer urls={dfnUrls} />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default DFNVisualization;
