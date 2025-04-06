import React from "react";
import Card from "./Card";

const FinancialSummaryCards = () => {
  return (
    <div className="space-y-4 lg:grid lg:grid-rows-3 lg:gap-6 lg:space-y-0">
      <Card colour="blue" data="$250,000">
        Total Assets
      </Card>
      <Card colour="pink" data="$50,000">
        Total Liabilities
      </Card>
      <Card colour="green" data="$200,000">
        Net Worth
      </Card>
    </div>
  );
};

export default FinancialSummaryCards;
