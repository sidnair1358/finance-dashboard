"use client";
import React from "react";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  PointElement,
  LinearScale,
  Title,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

const ScatterChart = ({ datasets }) => {
  const data = {
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const { x, y, sizeLabel } = context.raw;
            const toolTipText = [
              `Marketing Spend: $${x}`,
              `Units Sold: ${y}k`,
              `Product: ${sizeLabel}`,
            ];
            return toolTipText;
          },
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Marketing Spend (USD)",
        },
        beginAtZero: true,
      },
      y: {
        title: {
          display: true,
          text: "Units Sold",
        },
        ticks: {
          callback: (value) => `${value}k`,
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex h-50 items-center justify-center">
      <Scatter data={data} options={options} />
    </div>
  );
};

export default ScatterChart;
