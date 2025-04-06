"use client";
import React from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, LineElement } from "chart.js";

ChartJS.register(RadialLinearScale, LineElement);

const RadarChart = () => {
  const data = {
    labels: ["Savings", "Investments", "Debt", "Income", "Expenses", "Credit"],
    datasets: [
      {
        data: [75, 60, 40, 85, 65, 90],
        backgroundColor: "rgba(99, 106, 232, 0.2)",
        borderColor: "#636AE8",
        borderWidth: 2,
      },
    ],
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
