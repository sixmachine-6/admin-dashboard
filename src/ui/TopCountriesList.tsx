import { Link } from "react-router-dom";
// import { BiTrendingUp } from "react-icons/bi";
import { BiTrendingDown } from "react-icons/bi";

interface Country {
  country: { id: number; name: string; revenue: number };
}

export default function TopCountriesList({ country }: Country) {
  return (
    <li className="p-2 flex justify-between  gap-10  hover:bg-stone-100 transition-all">
      <div className="flex items-center gap-3">
        <img
          src="./../vite.svg"
          alt=""
          className="bg-slate-200 p-1  rounded-md"
        />
        <Link className="hover:text-blue-400" to={""}>
          {country.name}
        </Link>
      </div>
      <div className="flex items-center">
        <BiTrendingDown className="text-xl text-red-400" />
        <p>💲{country.revenue}</p>
      </div>
    </li>
  );
}
