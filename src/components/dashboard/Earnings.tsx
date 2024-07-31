import Button from "../../ui/Button";
import { BiTrendingUp } from "react-icons/bi";
import { BiTrendingDown } from "react-icons/bi";
// import { BsCurrencyRupee } from "react-icons/bs";
export default function Earnings() {
  return (
    <div className="bg-stone-50 p-4 pr-10 my-4 basis-1/2">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-xl">Earnings</h5>
        <Button>Check</Button>
      </div>

      <div>
        <p className="text-slate-600 pt-2">
          {/* <span className="rounded-full bg-emerald-300">
            <BsCurrencyRupee className="inline text-white text-3xl" />
          </span> */}
          Revenue
        </p>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-2xl">$37,802</p>
          <BiTrendingDown className="inline text-xl text-red-400" />
          <p className="text-red-400 font-semibold">0.56%</p>
        </div>
      </div>
      <div>
        <p className="text-slate-600">
          {/* <span className="h-10 w-20 rounded-full bg-emerald-300">
            <BsCurrencyRupee className="inline text-white" />
          </span> */}
          Profit
        </p>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-2xl">$28,305</p>
          <BiTrendingUp className="inline text-xl text-green-400" />
          <p className="text-green-400 font-semibold">0.56%</p>
        </div>
      </div>

      <div>
        <img src="./../vite.svg" alt="" className="h-52 w-52" />
      </div>
    </div>
  );
}
