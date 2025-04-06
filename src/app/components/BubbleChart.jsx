"use client";
import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register required components
ChartJS.register(
  LinearScale, // Required for both axes
  PointElement, // For rendering the bubbles
  Tooltip, // For hover interactions
  Legend, // For dataset labels
  Title, // For chart title
);

const BubbleChart = ({
  investments = [
    { name: "Conservative", risk: 30, return: 60, amount: 15 },
    { name: "Balanced", risk: 60, return: 80, amount: 25 },
    { name: "Aggressive", risk: 85, return: 95, amount: 10 },
  ],
  riskLabel = "Risk Level",
  returnLabel = "Potential Return",
}) => {
  const data = {
    datasets: [
      {
        label: "Investment Portfolio",
        data: investments.map((investment) => ({
          x: investment.risk,
          y: investment.return,
          r: investment.amount, // Bubble size
        })),
        backgroundColor: [
          "#4BC0C0", // Teal - Conservative
          "#636AE8", // Blue - Balanced
          "#E8618C", // Pink - Aggressive
        ],
        borderColor: "#fff",
        borderWidth: 1,
        hoverBorderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // We'll use custom labels
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const investment = investments[context.dataIndex];
            return [
              investment.name,
              `${riskLabel}: ${investment.risk}`,
              `${returnLabel}: ${investment.return}%`,
              `Allocation: ${investment.amount}%`,
            ];
          },
        },
      },
      title: {
        display: true,
        text: "Investment Risk vs Reward",
        font: {
          size: 16,
        },
        padding: {
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: riskLabel,
          font: {
            weight: "bold",
          },
        },
        min: 0,
        max: 100,
      },
      y: {
        title: {
          display: true,
          text: returnLabel,
          font: {
            weight: "bold",
          },
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div className="rounded-xl bg-white p-4 shadow">
      <div className="h-[calc(100%-1rem)]">
        {" "}
        {/* Account for padding */}
        <Chart type="bubble" data={data} options={options} />
      </div>
      <div className="mt-4 flex justify-center gap-4">
        {investments.map((investment, index) => (
          <div key={index} className="flex items-center">
            <div
              className="mr-2 h-3 w-3 rounded-full"
              style={{
                backgroundColor: data.datasets[0].backgroundColor[index],
              }}
            />
            <span className="text-sm">
              {investment.name} ({investment.amount}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BubbleChart;
