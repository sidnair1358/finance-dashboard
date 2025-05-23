import React from "react";
import DoughnutChart from "./charts/DoughnutChart";

const ProfitMarginSection = () => {
  return (
    <section className="md:col-span-2 lg:col-span-1">
      <div className="chart-card-container">
        <h2 className="chart-heading">Profit Margin</h2>
        <div className="flex flex-col items-center justify-center gap-10 text-center font-medium md:flex-row md:gap-6">
          <div className="flex flex-col items-center gap-7">
            <span className="text-[#636AE8]">Gross Profit Margin</span>
            <DoughnutChart percentage="40" bg="blue" labels="Gross Profit" />
            <span className="text-xl">$60,000</span>
          </div>
          <div className="flex flex-col items-center gap-7">
            <span className="text-[#E8618C]">Net Profit Margin</span>
            <DoughnutChart percentage="20" bg="pink" labels="Net Profit" />
            <span className="text-xl">$25,000</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfitMarginSection;
