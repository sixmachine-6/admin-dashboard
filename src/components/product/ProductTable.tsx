import Button from "../../ui/Button";
import ProductList from "../../ui/ProductList";

const products = [
  {
    productId: "P001",
    productName: "Wireless Mouse",
    sku: "WM-1001",
    category: "Electronics",
    price: 25.99,
    quantityInStock: 150,
    status: "Active",
    description: "Ergonomic wireless mouse with adjustable DPI.",
    img: "https://example.com/images/wireless_mouse.jpg",
    dateAdded: "2024-07-01",
  },
  {
    productId: "P002",
    productName: "Mechanical Keyboard",
    sku: "MK-2002",
    category: "Electronics",
    price: 79.99,
    quantityInStock: 80,
    status: "Active",
    description: "RGB backlit mechanical keyboard with blue switches.",
    img: "https://example.com/images/mechanical_keyboard.jpg",
    dateAdded: "2024-07-03",
  },
  {
    productId: "P003",
    productName: "Running Shoes",
    sku: "RS-3003",
    category: "Footwear",
    price: 59.99,
    quantityInStock: 45,
    status: "Out of Stock",
    description: "Lightweight running shoes with breathable material.",
    img: "https://example.com/images/running_shoes.jpg",
    dateAdded: "2024-07-05",
  },
  {
    productId: "P004",
    productName: "Coffee Mug",
    sku: "CM-4004",
    category: "Kitchenware",
    price: 9.99,
    quantityInStock: 200,
    status: "Active",
    description: "Ceramic coffee mug with 350ml capacity.",
    img: "https://example.com/images/coffee_mug.jpg",
    dateAdded: "2024-07-07",
  },
  {
    productId: "P005",
    productName: "Bluetooth Speaker",
    sku: "BS-5005",
    category: "Electronics",
    price: 45.99,
    quantityInStock: 100,
    status: "Active",
    description: "Portable Bluetooth speaker with 10-hour battery life.",
    img: "https://example.com/images/bluetooth_speaker.jpg",
    dateAdded: "2024-07-09",
  },
];

export default function ProductTable() {
  return (
    <div className="bg-stone-50 px-4">
      <div>
        <h5 className="font-semibold text-xl p-4">All Products</h5>
      </div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <input
            className="bg-green-100 lg:w-96 p-3 rounded-full focus:outline-none"
            placeholder="Search products by name, id"
          />

          <select className="bg-green-100 p-3 rounded-full mx-3 focus:outline-none">
            <option>Filter By Category</option>
            <option>Electronics</option>
            <option>Kitchenware</option>
          </select>
        </div>

        <Button>Add New Product</Button>
      </div>
      <div className="overflow-auto">
        <table className="table-auto mb-4">
          <thead>
            <tr>
              <th className="border-2 border-slate-200 p-2">Product ID</th>
              <th className="border-2 border-slate-200 p-2">Product</th>
              <th className="border-2 border-slate-200 p-2">Category</th>
              <th className="border-2 border-slate-200 p-2">Price</th>
              <th className="border-2 border-slate-200 p-2">
                Quantity in stock
              </th>
              <th className="border-2 border-slate-200 p-2">Status</th>
              <th className="border-2 border-slate-200 p-2">Sku</th>
              <th className="border-2 border-slate-200 p-2">Date added</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductList product={product} key={product.productId} />
            ))}
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  );
}
