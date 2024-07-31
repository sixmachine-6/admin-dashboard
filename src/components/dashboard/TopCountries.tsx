// import TopProductList from "../ui/TopProductList";

import Button from "../../ui/Button";
import TopCountriesList from "../../ui/TopCountriesList";

const topCountries = [
  {
    id: 1,
    name: "Belgium",
    revenue: 2321,
  },
  {
    id: 2,
    name: "Turkey",
    revenue: 2321,
  },
  {
    id: 3,
    name: "USA",
    revenue: 2321,
  },
];

export default function TopProducts() {
  return (
    <div className="bg-stone-50 basis-1/2 mx-2 p-4">
      <div className="flex items-center justify-between gap-6">
        <h5 className="font-semibold text-xl">Top Contries by Sales</h5>
        <Button>View All</Button>
      </div>

      <ul className="m-2 divide-y-2 divide-green-400">
        {topCountries.map((country) => (
          <TopCountriesList country={country} key={country.id} />
        ))}
      </ul>
    </div>
  );
}
