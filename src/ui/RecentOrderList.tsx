import { transformDate } from "../utils/helper";

import OrderButton from "./OrderButton";

interface Order {
  order: {
    orderId: number;
    customerId: number;
    name: string;
    quantity: number;
    status: string;
    orderDate: Date;
    totalAmount: number;
    paymentStatus: string;
  };
}

export default function RecentOrderList({ order }: Order) {
  return (
    <tr className="hover:bg-slate-100 transition-all">
      <td className="p-2 text-center border-2 border-slate-200">
        {order.orderId}
      </td>
      <td className="flex gap-4 p-4">
        <img
          src="./../vite.svg"
          alt=""
          className="bg-slate-200 p-2 rounded-md"
        />
        <div>
          <p>{order.name}</p>
          <p>*{order.quantity}</p>
        </div>
      </td>
      <td className="p-2 text-center border-2 font-semibold border-slate-200">
        ${order.totalAmount}
      </td>
      <td className="p-2 text-center border-2 border-slate-200">
        {transformDate(order.orderDate)}
      </td>
      <td className="p-2 text-center border-2 border-slate-200">
        <OrderButton type={order.status}>{order.status}</OrderButton>
      </td>
      <td className="p-2 text-center border-2 border-slate-200">
        {order.paymentStatus}
      </td>
    </tr>
  );
}
