"use client";
import React from "react";
import { Chart } from "react-chartjs-2";
import { Chart as ChartJS, RadialLinearScale, ArcElement } from "chart.js";

ChartJS.register(RadialLinearScale, ArcElement);

const PolarChart = ({
  categories = ["Marketing", "Finance", "IT", "Branding", "Customer Services"],
  amounts = [700, 900, 1000, 700, 850],
}) => {
  const data = {
    labels: categories,
    datasets: [
      {
        data: amounts,
        backgroundColor: [
          "#636AE8",
          "#E8618C",
          "#4BC0C0",
          "#FFCE56",
          "#9966FF",
        ],
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
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
