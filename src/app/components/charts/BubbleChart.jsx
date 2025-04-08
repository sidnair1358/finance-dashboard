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
import { Bubble } from "react-chartjs-2";

ChartJS.register(PointElement, LinearScale, Title, Tooltip, Legend);

const BubbleChart = ({ datasets }) => {
  const data = {
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const { x, y, r, sizeLabel } = context.raw;
            const toolTipText = [
              `Risk: ${x}%`,
              `Return: ${y}%`,
              `Exp: ${r}%`,
              `Type: ${sizeLabel}`,
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
          text: "Risk (Volatility %)",
        },
        beginAtZero: true,
      },
      y: {
        title: {
          display: true,
          text: "Annual Return %",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex h-50 w-full items-center justify-center">
      <Bubble data={data} options={options} />
    </div>
  );
};

export default BubbleChart;
