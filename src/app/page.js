import DashboardHeader from "./components/DashboardHeader";
import LineChart from "./components/charts/LineChart";
import PieChart from "./components/charts/PieChart";
import RadarChart from "./components/charts/RadarChart";
import PolarChart from "./components/charts/PolarChart";
import HorizontalBarChart from "./components/charts/HorizontalBarChart";
import FinancialSummary from "./components/FinancialSummary";
import ProfitMarginSection from "./components/ProfitMarginSection";
import VerticalBarChart from "./components/charts/VerticalBarChart";
import mockStore from "./mockStore";
import BubbleChart from "./components/charts/BubbleChart";
import ScatterChart from "./components/charts/ScatterChart";
import RecurringRevenueContainer from "./components/RecurringRevenueContainer";
import GaugeContainer from "./components/GaugeContainer";
import "./globals.css";

export const metadata = {
  title: "Expense Overview | Finance Dashboard",
};

export default function Home() {
  const {
    budgetComparison,
    captialComparison,
    invoiceStatus,
    wageDistribution,
    financialHealth,
    customerComparison,
    riskReturnAnalysis,
    productPerformance,
  } = mockStore;

  return (
    <div className="mx-auto w-full px-2 py-2 md:px-8">
      <DashboardHeader />
      <section className="mt-6 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0 lg:grid-cols-3">
        <FinancialSummary />
        <ProfitMarginSection />
        <div className="chart-card-container sm:hidden lg:block">
          <h2 className="chart-heading">Top 5 Customers</h2>
          <VerticalBarChart
            labels={customerComparison.labels}
            datasets={customerComparison.datasets}
          />
        </div>
      </section>
      <GaugeContainer />
      <section className="mt-6 space-y-6 md:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
        <article className="md:col-span-2">
          <div className="chart-card-container">
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
        <div className="chart-card-container sm:block md:hidden lg:block">
          <h2 className="chart-heading">Invoices by Status</h2>
          <PieChart
            labels={invoiceStatus.labels}
            datasets={invoiceStatus.datasets}
          />
        </div>
      </section>
      <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="chart-card-container">
          <h2 className="chart-heading">Monthly Budget vs Actual Spending</h2>
          <HorizontalBarChart
            datasets={budgetComparison.datasets}
            labels={budgetComparison.labels}
          />
        </div>
        <div className="chart-card-container sm:hidden lg:block">
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
      <section className="mt-6 hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:hidden">
        <div className="chart-card-container">
          <h2 className="chart-heading">Your Financial Health</h2>
          <RadarChart
            labels={financialHealth.labels}
            datasets={financialHealth.datasets}
          />
        </div>
        <div className="chart-card-container">
          <h2 className="chart-heading">Top 5 Customers</h2>
          <VerticalBarChart
            labels={customerComparison.labels}
            datasets={customerComparison.datasets}
          />
        </div>
      </section>
      <section className="mt-6">
        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
          <div className="chart-card-container">
            <h2 className="chart-heading">Risk Return Analysis</h2>
            <BubbleChart datasets={riskReturnAnalysis.datasets} />
          </div>
          <div className="chart-card-container">
            <h2 className="chart-heading">Product Performance</h2>
            <ScatterChart datasets={productPerformance.datasets} />
          </div>
        </div>
      </section>
      <RecurringRevenueContainer />
    </div>
  );
}
