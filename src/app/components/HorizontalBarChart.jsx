"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend);

const HorizontalBarChart = () => {
  const data = {
    labels: [
      "Rent",
      "Transportation",
      "Utilities",
      "Maintenance",
      "Ground Rent",
      "Broadband",
    ],
    datasets: [
      {
        label: "Budgeted",
        data: [1500, 600, 500, 300, 200, 1000],
        backgroundColor: "rgba(99, 106, 232, 0.7)",
        borderColor: "#636AE8",
        borderWidth: 1,
      },
      {
        label: "Actual",
        data: [1600, 550, 650, 280, 350, 900],
        backgroundColor: "rgba(232, 97, 140, 0.7)",
        borderColor: "#E8618C",
        borderWidth: 1,
      },
    ],
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
    <div className="h-64 justify-center">
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
