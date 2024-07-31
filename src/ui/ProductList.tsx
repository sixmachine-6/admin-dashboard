import { Product } from "../utils/interfaces";
import OrderButton from "./OrderButton";

export default function ProductList({ product }: Product) {
  return (
    <tr className="hover:bg-slate-100 transition-all">
      <td className="p-2 text-center border-2 border-slate-200">
        {product.productId}
      </td>
      <td className="flex gap-4 p-4 w-96">
        <img
          src="./../vite.svg"
          alt=""
          className="bg-slate-200 p-2 rounded-md"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{product.productName}</p>
          <p className="text-stone-600">{product.description}</p>
        </div>
      </td>
      <td className="py-2  px-5  border-2 font-semibold border-slate-200">
        {product.category}
      </td>
      <td className="p-2 px-5 text-center border-2 border-slate-200">
        ${product.price}
      </td>
      <td className="p-2 px-8 text-center border-2 border-slate-200">
        {product.quantityInStock}
      </td>
      <td className="p-2 px-8  border-2 border-slate-200">
        <OrderButton type={product.status}>{product.status}</OrderButton>
      </td>
      <td className="p-2 px-10 text-center border-2 border-slate-200">
        <p className="w-20">{product.sku}</p>
      </td>
      <td className="p-2 text-center border-2 border-slate-200">
        <p className="w-24">{product.dateAdded}</p>
      </td>
    </tr>
  );
}
