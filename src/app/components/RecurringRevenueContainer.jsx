import React from "react";
import mockStore from "../mockStore";
import MrrAreaChart from "./AreaChart";

const RecurringRevenueContainer = () => {
  const { mrr } = mockStore;

  return (
    <section className="mt-6">
      <div className="space-y-4 lg:gap-6 lg:space-y-0">
        <div className="chart-card-container">
          <h2 className="chart-heading">Monthly Recurring Revenue (MRR)</h2>
          <MrrAreaChart labels={mrr.labels} datasets={mrr.datasets} />
        </div>
      </div>
    </section>
  );
};

export default RecurringRevenueContainer;
