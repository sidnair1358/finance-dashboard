"use client";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const COLOR_SCHEMES = {
  actual: {
    primary: "#636AE8",
    secondary: "#D5D8FF",
  },
  projected: {
    primary: "#E8618C",
    secondary: "#FDDCE6",
  },
};

const LineChart = ({
  projectedData = [650, 590, 800, 810, 560, 650, 800],
  actualData = [500, 420, 600, 710, 400, 550, 700],
  labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Net Working Captial",
        data: actualData,
        borderColor: COLOR_SCHEMES.actual.primary,
        backgroundColor: COLOR_SCHEMES.actual.secondary,
        tension: 0.1,
        borderWidth: 2,
      },
      {
        label: "Gross Working Capital",
        data: projectedData,
        borderColor: COLOR_SCHEMES.projected.primary,
        backgroundColor: COLOR_SCHEMES.projected.secondary,
        tension: 0.1,
        borderWidth: 2,
        borderDash: [5, 5],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return "$" + value;
          },
        },
      },
    },
  };

  return (
    <div className="h-50 w-full">
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
