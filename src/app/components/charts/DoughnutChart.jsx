"use client";
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";

ChartJS.register(ArcElement);

const COLOR_SCHEMES = {
  pink: {
    primary: "#E8618C",
    secondary: "#FDDCE6",
  },
  blue: {
    primary: "#636AE8",
    secondary: "#D5D8FF",
  },
};

const CENTER_TEXT_FONT = "bold 24px sans-serif";

const DoughnutChart = ({ percentage = 40, bg = "blue", labels }) => {
  const { primary: background, secondary: fill } = COLOR_SCHEMES[bg];

  // https://stackoverflow.com/questions/20966817/how-to-add-text-inside-the-doughnut-chart-using-chart-js
  const centerTextPlugin = {
    beforeDraw(chart) {
      const {
        ctx,
        chartArea: { width, height },
      } = chart;

      ctx.restore();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = CENTER_TEXT_FONT;
      ctx.fillStyle = background;
      ctx.fillText(`${percentage}%`, width / 2, height / 2);
    },
  };

  const chartData = {
    labels: [labels],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [background, fill],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            if (context.label) {
              const label = context.label || "";
              const value = context.raw || 0;
              return `${label}: ${value}%`;
            }
            return "Total Income";
          },
        },
      },
    },
  };

  return (
    <div className="h-full md:w-28">
      <Doughnut
        data={chartData}
        options={chartOptions}
        plugins={[centerTextPlugin]}
      />
    </div>
  );
};

export default DoughnutChart;
