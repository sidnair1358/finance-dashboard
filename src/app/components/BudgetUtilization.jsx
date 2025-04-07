"use client";
import React from "react";
import GaugeChart from "react-gauge-chart";

const BudgetUtilization = () => {
  let spent = 200000;
  let budget = 600000;
  const utilization = Math.min(spent / budget, 1);

  return (
    <div className="text-center">
      <GaugeChart
        id="budget-gauge"
        percent={utilization}
        colors={["#F38989", "#F8B756", "#56C99E"]}
        arcWidth={0.3}
        hideText
        needleColor="#4B5563"
      />
      <p className="text-sm">
        Spent: <span className="font-semibold">${spent.toLocaleString()}</span>{" "}
        | Budget:
        <span className="font-semibold">${budget.toLocaleString()}</span>
      </p>
    </div>
  );
};

export default BudgetUtilization;
