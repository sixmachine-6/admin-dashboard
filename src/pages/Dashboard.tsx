import Earnings from "../components/dashboard/Earnings";
import InventoryStatus from "../components/dashboard/InventoryStatus";
import RecentOrder from "../components/dashboard/RecentOrder";
import RecentOrderChart from "../components/dashboard/RecentOrderChart";
import Reviews from "../components/dashboard/Reviews";
import Stats from "../components/dashboard/Stats";
import TopCategories from "../components/dashboard/TopCategories";
import DashboardLayout from "../ui/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Stats />
      <TopCategories />
      <RecentOrder />
      <div className="flex flex-col md:flex-row gap-4">
        <Earnings />
        <RecentOrderChart />
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <Reviews />
        <InventoryStatus />
      </div>
    </DashboardLayout>
  );
}
