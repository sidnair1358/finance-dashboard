"use client";
import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  PolarAreaController,
  RadialLinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(PolarAreaController, RadialLinearScale, ArcElement);

const PolarChart = ({ labels, datasets }) => {
  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.raw;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = Math.round((value / total) * 100);
            return `${label}: $${value} (${percentage}%)`;
          },
        },
      },
    },
    scales: {
      r: {
        pointLabels: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="flex h-64 w-full justify-center">
      <Chart type="polarArea" data={data} options={options} />
    </div>
  );
};

export default PolarChart;
