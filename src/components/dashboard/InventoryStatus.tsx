import Button from "../../ui/Button";
import InventoryList from "../../ui/InventoryList";

const inventory = [
  {
    productId: "P001",
    productName: "Wireless Mouse",
    sku: "WM-1001",
    quantityInStock: 150,
    reorderLevel: 50,
    lastRestockDate: "2024-07-10",
    supplierId: "S001",
  },
  {
    productId: "P002",
    productName: "Mechanical Keyboard",
    sku: "MK-2002",
    quantityInStock: 0,
    reorderLevel: 30,
    lastRestockDate: "2024-07-12",
    supplierId: "S002",
  },
];
export default function InventoryStatus() {
  return (
    <div className="flex flex-col  bg-stone-50 p-4">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-xl">Inventory Status</h5>
        <Button>View All</Button>
      </div>

      <div className="overflow-scroll lg:overflow-auto">
        <table className="table-auto m-2">
          <thead>
            <tr>
              <th className="border-2 border-slate-200 p-2">product ID</th>
              <th className="border-2 border-slate-200 p-2">Product</th>
              <th className="border-2 border-slate-200 p-2">
                quantity in stock
              </th>
              <th className="border-2 border-slate-200 p-2">
                last restock date
              </th>
              <th className="border-2 border-slate-200 p-2">supplier id</th>
              <th className="border-2 border-slate-200 p-2">sku</th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((product) => (
              <InventoryList product={product} key={product.productId} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
