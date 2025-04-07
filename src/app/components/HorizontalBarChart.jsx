"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend);

const HorizontalBarChart = ({ datasets, labels }) => {
  const data = {
    labels,
    datasets,
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            return `${label}: $${context.raw.toLocaleString()}`;
          },
        },
      },
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `$${value}`,
        },
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="h-64">
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
