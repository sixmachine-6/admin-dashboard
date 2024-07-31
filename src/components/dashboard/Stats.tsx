import StatsList from "../../ui/StatsList";
import { LuShoppingBag } from "react-icons/lu";
import { BiTrendingUp } from "react-icons/bi";
import { BiTrendingDown } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { CiFileOn } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
export default function Stats() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-3 gap-4">
      <StatsList
        title="Total Sales"
        value={34945}
        percent={1.56}
        Icon1={LuShoppingBag}
        Icon2={BiTrendingUp}
        color="bg-green-400"
      />
      <StatsList
        title="Total Income"
        value={37802}
        percent={1.56}
        Icon1={FaRupeeSign}
        Icon2={BiTrendingDown}
        color="bg-orange-400"
      />
      <StatsList
        title="Orders Paid"
        value={34945}
        percent={0.0}
        Icon1={CiFileOn}
        Icon2={BiTrendingUp}
        color="bg-stone-300"
      />
      <StatsList
        title="Total Visitor"
        value={34945}
        percent={1.56}
        Icon1={IoPeopleSharp}
        Icon2={BiTrendingUp}
        color="bg-blue-400"
      />
    </ul>
  );
}
