"use client";
import GaugeChart from "react-gauge-chart";

const LiquidityRatio = ({ currentRatio = 1.8 }) => {
  const normalizedValue = Math.min(currentRatio / 3, 1);

  return (
    <div className="text-center">
      <GaugeChart
        id="liquidity-gauge"
        percent={normalizedValue}
        colors={["#F38989", "#F8B756", "#56C99E"]}
        arcWidth={0.3}
        hideText
        needleColor="#4B5563"
      />
      <p className="mt-1 text-sm">
        {currentRatio < 1
          ? "Risk of insolvency"
          : currentRatio < 1.5
            ? "Needs monitoring"
            : "Healthy"}
      </p>
    </div>
  );
};

export default LiquidityRatio;
