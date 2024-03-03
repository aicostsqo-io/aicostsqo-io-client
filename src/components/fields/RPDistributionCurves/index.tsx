import { useSiteContext } from "@/contexts/Site";
import React, { useEffect, useState } from "react";
import LineChart from "../../common/Charts/Line";
import { getRpDistributionCurves } from "@/api/rp";
import TopBar from "./TopBar";
import BarChart from "@/components/common/Charts/Bar";

/* const data = {
  result: {
    volumeTheoric: {
      pdf: [
        {
          У: 212,
          x: 149.69418638,
        },
        {
          У: 293,
          x: 342,
        },
        {
          У: 374,
          x: 534.30581362,
        },
        {
          У: 455,
          x: 726,
        },
        {
          У: 536,
          x: 917.69418638,
        },
      ],
    },
  },
}; */

const distributionsList = [
  {
    value: "pdf",
    label: "PDF",
  },
  {
    value: "cdf",
    label: "CDF",
  },
  {
    value: "histogram",
    label: "Histogram",
  },
];

const volumeTypesList = [
  {
    value: "volumeTheoric",
    label: "Volume Theoric",
  },
  {
    value: "volumeQuarry",
    label: "Volume Quarry",
  },
  {
    value: "totalVolumeOfMaxQuarry",
    label: "Total Volume Of Max Quarry",
  },
];

const distributionsInitialState = {
  pdf: false,
  cdf: false,
  histogram: false,
};

const volumeTypesInitialState = {
  volumeTheoric: false,
  volumeQuarry: false,
  totalVolumeOfMaxQs: false,
};

const requestBody = {
  rpIdList: ["65d9ceac91e335b37a678068"],
  sourceList: ["volumeTheoric", "volumeQuarry", "totalVolumeOfMaxQs"],
  chartList: ["pdf", "histogram", "cdf"],
};

function RPDistributionCurves() {
  const { selectedRP } = useSiteContext();
  const [data, setData] = useState<null | any>(null);
  const [chartData, setChartData] = useState<null | any>(null);
  const [volumeTypes, setVolumeTypes] = useState(volumeTypesInitialState);
  const [distributions, setDistributions] = useState(distributionsInitialState);

  useEffect(() => {
    getRpDistributionCurves({
      ...requestBody,
      rpIdList: [selectedRP._id],
    }).then((res: any) => {
      console.log(res);
      const { rpId, ...rest } = res.data.result[0];
      setData(rest);
    });
  }, [selectedRP]);

  function getChartData(distributionKey: any) {
    if (!data) return null;

    let chartData = null;

    switch (distributionKey) {
      case "cdf":
        chartData = {
          totalVolumeOfMaxQs: data?.totalVolumeOfMaxQs?.cdf,
          volumeQuarry: data?.volumeQuarry?.cdf,
          volumeTheoric: data?.volumeTheoric?.cdf,
        };
        break;
      case "pdf":
        chartData = {
          totalVolumeOfMaxQs: data?.totalVolumeOfMaxQs?.pdf,
          volumeQuarry: data?.volumeQuarry?.pdf,
          volumeTheoric: data?.volumeTheoric?.pdf,
        };
        break;
      case "histogram":
        chartData = {
          totalVolumeOfMaxQs: data?.totalVolumeOfMaxQs?.histogram,
          volumeQuarry: data?.volumeQuarry?.histogram,
          volumeTheoric: data?.volumeTheoric?.histogram,
        };
        break;
      default:
        chartData = null;
    }

    return chartData;
  }
  return (
    <div className="flex flex-col gap-5">
      <TopBar
        volumeTypes={volumeTypes}
        distributions={distributions}
        setVolumeTypes={setVolumeTypes}
        setDistributions={setDistributions}
      />
      <div className="grid grid-cols-1 mt-12">
        {data &&
          Object.entries(distributions).map(
            ([distributionKey, distributionValue]) => {
              if (distributionValue && distributionKey !== "histogram") {
                return (
                  <LineChart
                    key={distributionKey}
                    data={getChartData(distributionKey)}
                    text={distributionKey}
                    volumeTypes={volumeTypes}
                  />
                );
              }
              if (distributionValue && distributionKey === "histogram") {
                console.log(
                  "getChartData(distributionKey)",
                  getChartData(distributionKey)
                );
                return (
                  <BarChart
                    key={distributionKey}
                    data={getChartData(distributionKey)}
                    text={distributionKey}
                    volumeTypes={volumeTypes}
                  />
                );
              }
            }
          )}
      </div>
    </div>
  );
}

export default RPDistributionCurves;
