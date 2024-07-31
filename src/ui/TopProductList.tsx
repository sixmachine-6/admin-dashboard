import { Link } from "react-router-dom";
import { TopProduct } from "../utils/interfaces";

export default function TopProductList({ product }: TopProduct) {
  return (
    <li className="p-2 flex justify-between items-center gap-10  hover:bg-stone-100 transition-all">
      <img src="./../vite.svg" alt="" className="bg-slate-200 p-2 rounded-md" />
      <div className="min-w-48">
        <Link to={""} className="hover:text-blue-400">
          {product.productName}
        </Link>
        <p>{product.quantity} Items</p>
      </div>
      <div>
        <p>-{product.discount}%</p>
        <p className="font-semibold">${product.price}</p>
      </div>

      <p>⭐{product.review}</p>
    </li>
  );
}
