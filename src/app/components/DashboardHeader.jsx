import Button from "./Common/Button";
import { MdFilterList } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
const DashboardHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
      <h1 className="text-3xl font-semibold">Finance Dashboard</h1>
      <div className="flex w-full justify-evenly gap-4 md:w-auto md:justify-end">
        <Button icon={<MdFilterList className="mr-2 h-4 w-4" />}>Filter</Button>
        <Button primary icon={<FaPlus className="mr-2 h-4 w-4" />}>
          Add Chart
        </Button>
      </div>
    </div>
  );
};

export default DashboardHeader;
