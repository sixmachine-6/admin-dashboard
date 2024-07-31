import Button from "../../ui/Button";
import TopProductList from "../../ui/TopProductList";

const topProducts = [
  {
    productId: "P001",
    productName: "Patimax Fragrance Long...",
    category: "Perfumes",
    img: "",
    price: 270,
    discount: 20,
    quantity: 23,
    review: 4.5,
  },
  {
    productId: "P002",
    productName: "Patimax Fragrance Long...",
    category: "Perfumes",
    img: "",
    price: 290,
    discount: 18,
    quantity: 10,
    review: 4,
  },
  {
    productId: "P003",
    productName: "Patimax Fragrance TV...",
    category: "Perfumes",
    img: "",
    price: 2900,
    discount: 0,
    quantity: 10,
    review: 5,
  },
];

export default function TopProducts() {
  return (
    <div className="bg-stone-50 basis-1/2 p-4 flex flex-col">
      <div className="flex  justify-between">
        <h5 className="font-semibold text-xl">Top Products</h5>
        <Button>View All</Button>
      </div>

      <ul className="m-2 divide-y-2 divide-green-400 overflow-x-auto">
        {topProducts.map((product) => (
          <TopProductList product={product} key={product.productId} />
        ))}
      </ul>
    </div>
  );
}
