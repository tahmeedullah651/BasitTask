import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { dataset, valueFormatter } from "../../assets/Data/ChartData";

const chartSetting = {
  //   yAxis: [
  //     {
  //       label: "rainfall (mm)",
  //     },
  //   ],
  borderRadius: 30,
  width: 600,
  height: 300,

  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

export default function BarsChart() {
  return (
    <BarChart
      dataset={dataset}
      xAxis={[{ scaleType: "band", dataKey: "month" }]}
      series={[
        {
          dataKey: "branch1",
          label: "Branch 1",
          valueFormatter,
          color: "#4B5945",
          radius: 4,
        },
        {
          dataKey: "branch2",
          label: "Branch 2",
          valueFormatter,
          color: "#66785F",
        },
        {
          dataKey: "branch3",
          label: "Branch 3",
          valueFormatter,
          color: "#91AC8F",
        },
      ]}
      {...chartSetting}
    />
  );
}
