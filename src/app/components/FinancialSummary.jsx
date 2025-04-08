import React from "react";
import Card from "./Common/Card";

const FinancialSummary = () => {
  const financialMetrics = [
    { amount: "$250,000", colour: "blue", title: "Total Assets" },
    { amount: "$50,000", colour: "pink", title: "Total Liabilities" },
    { amount: "$200,000", colour: "green", title: "Net Worth" },
  ];
  return (
    <div className="space-y-6 md:space-y-8 lg:grid lg:grid-rows-3 lg:gap-6 lg:space-y-0">
      {financialMetrics.map((data, i) => (
        <Card key={i} colour={data.colour} data={data.amount}>
          {data.title}
        </Card>
      ))}
    </div>
  );
};

export default FinancialSummary;
