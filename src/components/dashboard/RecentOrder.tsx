import CustomerDemographics from "./CustomerDemographics";
import RecentOrderTable from "./RecentOrderTable";

export default function RecentOrder() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <RecentOrderTable />
      <CustomerDemographics />
    </div>
  );
}
