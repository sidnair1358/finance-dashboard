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

const CENTER_TEXT_FONT = "bold 24px Inter, sans-serif";

const DoughnutChart = ({ percentage = 40, bg = "blue" }) => {
  const { primary: background, secondary: fill } =
    COLOR_SCHEMES[bg] || COLOR_SCHEMES.blue;

  const centerTextPlugin = {
    id: "centerText",
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
    },
  };

  return (
    <div className="relative h-50 w-full">
      <Doughnut
        data={chartData}
        options={chartOptions}
        plugins={[centerTextPlugin]}
      />
    </div>
  );
};

export default DoughnutChart;
