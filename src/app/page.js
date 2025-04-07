import DashboardHeader from "./components/DashboardHeader";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import MrrAreaChart from "./components/AreaChart";
import RadarChart from "./components/RadarChart";
import PolarChart from "./components/PolarChart";
import BubbleChart from "./components/BubbleChart";
import HorizontalBarChart from "./components/HorizontalBarChart";
import FinancialSummaryCards from "./components/FinancialSummaryCards";
import ProfitMarginSection from "./components/ProfitMarginSection";
import mockStore from "./mockStore";
import "./globals.css";

export const metadata = {
  title: "Expense Overview | Finance Dashboard",
};

export default function Home() {
  const {
    mrr,
    budgetComparison,
    captialComparison,
    invoiceStatus,
    wageDistribution,
    financialHealth,
  } = mockStore;

  return (
    <div className="mx-auto w-full px-2 py-2 md:px-8">
      <DashboardHeader />
      <section className="mt-6 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
        <FinancialSummaryCards />
        <ProfitMarginSection />
      </section>
      <section className="mt-6 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
        <article className="md:col-span-2">
          <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="chart-heading">
              Net Working Capital vs Gross Working Capital
            </h2>
            <div className="items-center justify-center gap-10 text-center font-bold md:flex-row md:gap-6">
              <div className="items-center gap-7">
                <LineChart
                  labels={captialComparison.labels}
                  datasets={captialComparison.datasets}
                />
              </div>
            </div>
          </div>
        </article>
        <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="chart-heading">Invoices by Status</h2>
          <PieChart
            labels={invoiceStatus.labels}
            datasets={invoiceStatus.datasets}
          />
        </div>
      </section>
      <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="chart-card-container">
          <h2 className="chart-heading">Monthly Budget vs Actual Spending</h2>
          <HorizontalBarChart
            datasets={budgetComparison.datasets}
            labels={budgetComparison.labels}
          />
        </div>
        <div className="chart-card-container">
          <h2 className="chart-heading">Your Financial Health</h2>
          <RadarChart
            labels={financialHealth.labels}
            datasets={financialHealth.datasets}
          />
        </div>
        <div className="chart-card-container">
          <h2 className="chart-heading">Wages by Department</h2>
          <PolarChart
            labels={wageDistribution.labels}
            datasets={wageDistribution.datasets}
          />
        </div>
      </section>
      <section className="mt-6">
        <div className="space-y-4 lg:gap-6 lg:space-y-0">
          <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="chart-heading">Monthly Recurring Revenue (MRR)</h2>
            <MrrAreaChart labels={mrr.labels} datasets={mrr.datasets} />
          </div>
        </div>
      </section>
    </div>
  );
}
