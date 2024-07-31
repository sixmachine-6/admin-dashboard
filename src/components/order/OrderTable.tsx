import Button from "../../ui/Button";
import OrderList from "../../ui/OrderList";

const orders = [
  {
    orderId: "O001",
    customerId: "C001",
    customerName: "John Doe",
    orderDate: "2024-07-10",
    orderStatus: "Delivered",
    totalAmount: 150.0,
    paymentMethod: "Credit Card",
    shippingAddress: "123 Main St, Springfield",
    itemsOrdered: ["Mouse", "Keyboard"],
    shippingMethod: "Standard",
    trackingNumber: "1Z999AA10123456784",
  },
  {
    orderId: "O002",
    customerId: "C002",
    customerName: "Jane Smith",
    orderDate: "2024-07-11",
    orderStatus: "Processing",
    totalAmount: 250.0,
    paymentMethod: "PayPal",
    shippingAddress: "456 Elm St, Shelbyville",
    itemsOrdered: ["Shoes", "Mug"],
    shippingMethod: "Express",
    trackingNumber: "1Z999BB20123456785",
  },
  {
    orderId: "O003",
    customerId: "C003",
    customerName: "Michael Johnson",
    orderDate: "2024-07-12",
    orderStatus: "Pending",
    totalAmount: 100.0,
    paymentMethod: "Credit Card",
    shippingAddress: "789 Oak St, Capital City",
    itemsOrdered: ["Bluetooth Speaker"],
    shippingMethod: "Standard",
    trackingNumber: "1Z999CC30123456786",
  },
  {
    orderId: "O004",
    customerId: "C004",
    customerName: "Emily Davis",
    orderDate: "2024-07-13",
    orderStatus: "Shipped",
    totalAmount: 75.0,
    paymentMethod: "Credit Card",
    shippingAddress: "101 Pine St, Ogdenville",
    itemsOrdered: ["Coffee Mug"],
    shippingMethod: "Standard",
    trackingNumber: "1Z999DD40123456787",
  },
  {
    orderId: "O005",
    customerId: "C005",
    customerName: "William Brown",
    orderDate: "2024-07-14",
    orderStatus: "Cancelled",
    totalAmount: 200.0,
    paymentMethod: "PayPal",
    shippingAddress: "202 Birch St, North Haverbrook",
    itemsOrdered: ["Running Shoes"],
    shippingMethod: "Express",
    trackingNumber: null,
  },
];
export default function OrderTable() {
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
            {orders.map((order) => (
              <OrderList order={order} key={order.orderId} />
            ))}
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  );
}
