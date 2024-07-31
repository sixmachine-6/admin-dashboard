interface Inventory {
  product: {
    productId: string;
    productName: string;
    sku: string;
    quantityInStock: number;
    reorderLevel: number;
    lastRestockDate: string;
    supplierId: string;
  };
}
export default function InventoryList({ product }: Inventory) {
  return (
    <tr>
      <td className="p-2 text-center border-2  border-slate-200">
        {product.productId}
      </td>
      <td className="p-2 text-center border-2  border-slate-200">
        {product.productName}
      </td>
      <td className="p-2 text-center  border-2  border-slate-200">
        {product.quantityInStock === 0 ? (
          <p className="bg-red-400 text-white rounded-xl mx-3">out of stock</p>
        ) : (
          product.quantityInStock
        )}
      </td>
      <td className="p-2 text-center border-2  border-slate-200">
        {product.lastRestockDate}
      </td>
      <td className="p-2 text-center border-2  border-slate-200">
        {product.supplierId}
      </td>
      <td className="p-2 text-center border-2  border-slate-200">
        {product.sku}
      </td>
    </tr>
  );
}
