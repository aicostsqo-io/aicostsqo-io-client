import React, { use, useEffect, useMemo, useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  text: string;
  data: any;
  volumeTypes: any;
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
  }
}

const LineChart = ({ text, data, volumeTypes }: LineChartProps) => {
  const [datasets, setDatasets] = useState<any[]>([]);
  const [labels, setLabels] = useState<any[]>([]);
  useEffect(() => {
    console.log("data", data);
    const datasetsArray: any = [];
    let labelsArray: any = [];
    Object.entries(volumeTypes).forEach(([key, value]) => {
      if (value) {
        labelsArray = data[key]?.map((item: any) => item.y);
        const colorObject: any = getColor(key);
        datasetsArray.push({
          label: key,
          data: data[key]?.map((item: any) => item.x),
          fill: false,
          backgroundColor: colorObject.backgroundColor,
          borderColor: colorObject.borderColor,
        });
      }
    });
    console.log("datasetsArray", datasetsArray);
    setDatasets(datasetsArray);
    setLabels(labelsArray);
  }, [volumeTypes]);

  console.log("data", data);
  const options = useMemo(() => {
    return {
      type: "line",
      responsive: true,
      plugins: {
        legend: {
          position: "top" as const,
        },
        title: {
          display: true,
          text,
        },
      },
      indexAxis: "y" as const,
      scales: {
        x: {
          type: "linear" as const,
          position: "bottom" as const,
        },
        y: {
          type: "linear" as const,
          position: "left" as const,
        },
      },
    };
  }, []);

  console.log("labels", labels);
  console.log("datasets", datasets);

  return (
    <Line
      options={options}
      data={{
        labels,
        datasets,
      }}
    />
  );
};

export default LineChart;
