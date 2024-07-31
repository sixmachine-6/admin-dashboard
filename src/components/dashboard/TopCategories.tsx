import TopCountries from "./TopCountries";
import TopProducts from "./TopProducts";

export default function TopCategories() {
  return (
    <div className="flex flex-col lg:flex-row">
      <TopProducts />
      <TopCountries />
    </div>
  );
}
