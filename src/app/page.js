import Button from "./components/Button";
import { MdFilterList } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Card from "./components/Card";
import DoughnutChart from "./components/DoughnutChart";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-2 md:px-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <h1 className="text-3xl font-semibold">Finance Dashboard</h1>
        <div className="flex w-full justify-evenly gap-4 md:w-auto md:justify-end">
          <Button icon={<MdFilterList className="mr-2 h-4 w-4" />}>
            Filter
          </Button>
          <Button primary icon={<FaPlus className="mr-2 h-4 w-4" />}>
            Add Chart
          </Button>
        </div>
      </div>
      <section className="mt-6 space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
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

        <article className="md:col-span-2">
          <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-8 text-center text-lg font-bold md:text-left">
              Profit Margin
            </h2>
            <div className="flex flex-col items-center justify-center gap-10 text-center font-bold md:flex-row md:gap-6">
              <div className="flex flex-col items-center gap-7">
                <span className="text-[#636AE8]">Gross Profit Margin</span>
                <DoughnutChart percentage="40" bg="blue" />
                <span className="text-2xl">$60,000</span>
              </div>
              <div className="flex flex-col items-center gap-7">
                <span className="text-[#E8618C]">Net Profit Margin</span>
                <DoughnutChart percentage="20" bg="pink" />
                <span className="text-2xl">$25,000</span>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
