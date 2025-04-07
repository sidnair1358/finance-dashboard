import React from "react";
import RevenueGrowth from "./RevenueGrowth";
import BudgetUtilization from "./BudgetUtilization";
import LiquidityRatio from "./LiquidityRatio";

const GaugeContainer = () => {
  return (
    <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3">
      <div className="chart-card-container">
        <h2 className="chart-heading">Revenue Growth</h2>
        <RevenueGrowth />
      </div>
      <div className="chart-card-container">
        <h2 className="chart-heading">Budget Utilization</h2>
        <BudgetUtilization />
      </div>
      <div className="chart-card-container">
        <h2 className="chart-heading">Liquidity</h2>
        <LiquidityRatio />
      </div>
    </section>
  );
};

export default GaugeContainer;
