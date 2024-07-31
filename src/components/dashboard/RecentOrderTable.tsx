import Button from "../../ui/Button";
import RecentOrderList from "../../ui/RecentOrderList";
const recentOrders = [
  {
    orderId: 1,
    customerId: 1,
    name: "Amul Milk",
    status: "delievered",
    quantity: 1,
    orderDate: new Date(),
    totalAmount: 3000,
    paymentStatus: "Done",
  },
  {
    orderId: 2,
    customerId: 1,
    totalAmount: 3000,
    name: "Trousers",
    status: "shipped",
    quantity: 1,
    orderDate: new Date(),
    paymentStatus: "Done",
  },
  {
    orderId: 3,
    customerId: 1,
    totalAmount: 3000,
    name: "Amul Milk",
    status: "processing",
    quantity: 1,
    orderDate: new Date(),
    paymentStatus: "Cash-on-delievery",
  },
  {
    orderId: 4,
    customerId: 1,
    totalAmount: 3000,
    name: "Amul Milk",
    status: "pending",
    quantity: 1,
    orderDate: new Date(),
    paymentStatus: "Done",
  },
  {
    orderId: 5,
    customerId: 1,
    totalAmount: 3000,
    name: "Amul Milk",
    status: "cancelled",
    quantity: 1,
    orderDate: new Date(),
    paymentStatus: "refund",
  },
];
export default function RecentOrderTable() {
  return (
    <div className="basis-3/4 bg-stone-50 p-4 my-4">
      <div className="flex items-center justify-between">
        <h5 className="font-semibold text-xl">Recent Orders</h5>
        <Button>View All</Button>
      </div>

      <div className="overflow-auto">
        <table className="table-auto my-2">
          <thead>
            <tr>
              <th className="border-2 border-slate-200 p-2">order ID</th>
              <th className="border-2 border-slate-200 p-2">Product</th>
              <th className="border-2 border-slate-200 p-2">total Price</th>
              <th className="border-2 border-slate-200 p-2">order Date</th>
              <th className="border-2 border-slate-200 p-2">status</th>
              <th className="border-2 border-slate-200 p-2">paymentStatus</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <RecentOrderList order={order} key={order.orderId} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
