"use client";
import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, LineElement } from "chart.js";

ChartJS.register(RadialLinearScale, LineElement);

const RadarChart = ({ labels, datasets }) => {
  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}/100`,
        },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: { stepSize: 20 },
      },
    },
  };

  return (
    <div className="flex h-64 w-full justify-center">
      <Radar data={data} options={options} />
    </div>
  );
};

export default RadarChart;
