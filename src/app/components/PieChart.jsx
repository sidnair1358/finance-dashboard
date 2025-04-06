"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Paid", "Authorized", "Voided", "Deleted", "Draft"],
    datasets: [
      {
        data: [5500, 4800, 2200, 1500, 900],
        backgroundColor: [
          "#636AE8",
          "#E8618C",
          "#4BC0C0",
          "#FFCE56",
          "#9966FF",
        ],
        hoverOffset: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
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
  };

  return (
    <div className="flex h-64 w-full justify-center">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
