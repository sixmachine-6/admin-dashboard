import { IconType } from "react-icons";

interface Stats {
  title: string;
  value: number;
  percent: number;
  Icon1: IconType;
  Icon2: IconType;
  color: string;
}
export default function StatsList({
  title,
  value,
  Icon1,
  Icon2,
  percent,
  color,
}: Stats) {
  return (
    <li className="flex items-center px-5 py-3 bg-stone-50 rounded-xl">
      <Icon1
        className={`${console.log(
          color
        )} ${color} text-6xl  rounded-full text-white p-3`}
      />

      <div className="px-2">
        <h2 className="text-stone-700">{title}</h2>
        <p className="font-semibold text-2xl">{value}</p>
      </div>
      <p className="text-green-400">
        <Icon2 className="text-2xl inline" /> {percent}%
      </p>
    </li>
  );
}
