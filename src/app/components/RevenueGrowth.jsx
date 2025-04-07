"use client";
import GaugeChart from "react-gauge-chart";

const RevenueGrowth = ({ currentGrowth = 0.12, targetGrowth = 0.15 }) => {
  const normalizedGrowth =
    (Math.min(Math.max(currentGrowth, -0.3), 0.3) / 0.3) * 0.5 + 0.5;

  return (
    <div className="p-2 text-center">
      <GaugeChart
        id="revenue-growth-gauge"
        percent={normalizedGrowth}
        colors={["#F38989", "#F8B756", "#56C99E"]}
        arcWidth={0.3}
        hideText
        needleColor="#4B5563"
      />
      <div className="mt-1 text-sm">
        <p>
          Current:
          <span className="font-semibold">
            {(currentGrowth * 100).toFixed(1)}%
          </span>{" "}
          | Target:
          <span className="font-semibold">
            {(targetGrowth * 100).toFixed(1)}%
          </span>
        </p>
      </div>
    </div>
  );
};

export default RevenueGrowth;
