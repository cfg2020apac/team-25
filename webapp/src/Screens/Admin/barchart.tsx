import React, { FC } from "react";
import { Bar } from "react-chartjs-2";
export interface Props {
  input: {
    color?: string;
    chartdata: Array<number>;
    labels: Array<string>;
    title: string;
  };
}

export const BarChart: FC<Props> = (props) => {
  const {
    input: { title, color = "#FFFFFF", chartdata, labels },
  } = props;
  const data = {
    datasets: [
      {
        label: title,
        backgroundColor: color,
        borderColor: color,
        data: chartdata,
        barThickness: 20,
        maxBarThickness: 20,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
      },
    ],
    labels: labels,
  };

  return <Bar data={data} />;
};
