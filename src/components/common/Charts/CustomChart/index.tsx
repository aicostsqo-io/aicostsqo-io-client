import React, { useEffect, useState } from "react";
import Plot from "react-plotly.js";

interface LineChartProps {
  text: string;
  data: any;
  volumeTypes: any;
  showAnalysis: any;
  type: string;
}

function getColor(key: string) {
  switch (key) {
    case "volumeTheoric":
      return {
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      };
    case "volumeQuarry":
      return {
        borderColor: "rgb(54, 162, 235)",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
      };
    case "totalVolumeOfMaxQs":
      return {
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      };
    case "volumeTheoricExpected":
      return {
        borderColor: "rgba(255, 99, 132, 0.5)",
      };
    case "volumeQuarryExpected":
      return {
        borderColor: "rgba(54, 162, 235, 0.5)",
      };
    case "totalVolumeOfMaxQsExpected":
      return {
        borderColor: "rgba(75, 192, 192, 0.5)",
      };
    default:
      return {
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      };
  }
}
const CustomChart = ({
  text,
  data,
  volumeTypes,
  showAnalysis,
  type,
}: LineChartProps) => {
  const [datasets, setDatasets] = useState<any[]>([]);

  useEffect(() => {
    const datasetsArray: any = [];
    Object.entries(volumeTypes).forEach(([key, object]: any) => {
      if (object.value) {
        datasetsArray.push({
          x: data[key]?.map((item: any) => item.x),
          y: data[key]?.map((item: any) => item.y),
          type: type,
          mode: "lines+markers",
          marker: { color: getColor(key)?.borderColor },
          name: object.label,
        });

        if (text === "PDF" && showAnalysis) {
          datasetsArray.push({
            x: data[object?.analysisKey]?.map((item: any) => item.x),
            y: data[object?.analysisKey]?.map((item: any) => item.y),
            type: type,
            mode: "lines+markers",
            marker: { color: getColor(object.analysisKey)?.borderColor },
            name: object.analysisLabel,
          });
        }
      }
    });
    setDatasets(datasetsArray);
  }, [volumeTypes, showAnalysis]);

  console.log("datasets", datasets);

  return <Plot data={datasets} layout={{ title: text }} />;
};

export default CustomChart;
