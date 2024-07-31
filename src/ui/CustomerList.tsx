import OrderButton from "./OrderButton";

interface Customer {
  customer: {
    customerId: string;
    name: string;
    email: string;
    phoneNumber: number;
    registrationDate: string;
    totalOrders: number;
    totalSpend: number;
    lastOrderDate: string;
    status: string;
  };
}

export default function CustomerList({ customer }: Customer) {
  return (
    <tr className="hover:bg-slate-100 transition-all">
      <td className="p-2 text-center border-2 border-slate-200">
        {customer.customerId}
      </td>
      <td className="flex items-center gap-4 p-4 w-52">
        <img
          src="./../vite.svg"
          alt=""
          className="bg-slate-200 p-2 rounded-md"
        />

        <p className="font-semibold">{customer.name}</p>
      </td>
      <td className="py-2  px-5  border-2 font-semibold border-slate-200">
        {customer.email}
      </td>
      <td className="py-2  px-5  border-2 font-semibold border-slate-200">
        {customer.phoneNumber}
      </td>
      <td className="p-2  text-center border-2 border-slate-200">
        {customer.registrationDate}
      </td>
      <td className="p-2 px-8 text-center border-2 border-slate-200">
        {customer.totalOrders}
      </td>
      <td className="p-2 px-8  border-2 border-slate-200">
        ${customer.totalSpend}
      </td>
      <td className="p-2 w-36 text-center border-2 border-slate-200">
        {customer.lastOrderDate}
      </td>
      <td className="p-2 w-36 text-center border-2 border-slate-200">
        <OrderButton type={customer.status}>{customer.status}</OrderButton>
      </td>
    </tr>
  );
}
