import Button from "../../ui/Button";
import CustomerList from "../../ui/CustomerList";

const customers = [
  {
    customerId: "C001",
    name: "John Doe",
    email: "john.doe@example.com",
    phoneNumber: 123456 - 7890,
    registrationDate: "2024-01-15",
    totalOrders: 10,
    totalSpend: 500.0,
    lastOrderDate: "2024-07-10",
    status: "Active",
  },
  {
    customerId: "C002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phoneNumber: 987654321,
    registrationDate: "2024-03-22",
    totalOrders: 5,
    totalSpend: 250.0,
    lastOrderDate: "2024-07-12",
    status: "Active",
  },
  {
    customerId: "C003",
    name: "Michael Johnson",
    email: "michael.j@example.com",
    phoneNumber: 111222 - 3333,
    registrationDate: "2024-05-05",
    totalOrders: 3,
    totalSpend: 150.0,
    lastOrderDate: "2024-07-09",
    status: "Inactive",
  },
  {
    customerId: "C004",
    name: "Emily Davis",
    email: "emily.davis@example.com",
    phoneNumber: 222333 - 4444,
    registrationDate: "2024-02-10",
    totalOrders: 8,
    totalSpend: 400.0,
    lastOrderDate: "2024-07-11",
    status: "Active",
  },
  {
    customerId: "C005",
    name: "William Brown",
    email: "william.brown@example.com",
    phoneNumber: 333444 - 5555,
    registrationDate: "2024-04-15",
    totalOrders: 6,
    totalSpend: 300.0,
    lastOrderDate: "2024-07-08",
    status: "Inactive",
  },
];
export default function ProductTable() {
  return (
    <div className="bg-stone-50 px-4">
      <div>
        <h5 className="font-semibold text-xl p-4">All Customers</h5>
      </div>
      <div className="flex items-center justify-between mb-3">
        <div>
          <input
            className="bg-green-100 lg:w-96 p-3 rounded-full focus:outline-none"
            placeholder="Search users by name, id"
          />

          <select className="bg-green-100 p-3 rounded-full mx-3 focus:outline-none">
            <option>Filter By Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        <Button>Add New User</Button>
      </div>
      <div className="overflow-auto">
        <table className="table-auto mb-4">
          <thead>
            <tr>
              <th className="border-2 border-slate-200 p-2">Customer ID</th>
              <th className="border-2 border-slate-200 p-2">Customer</th>
              <th className="border-2 border-slate-200 p-2">Email</th>
              <th className="border-2 border-slate-200 p-2">Phone Number</th>
              <th className="border-2 border-slate-200 p-2">
                Registration Date
              </th>
              <th className="border-2 border-slate-200 p-2">total Orders</th>
              <th className="border-2 border-slate-200 p-2">total Spend</th>
              <th className="border-2 border-slate-200 p-2">last order Date</th>
              <th className="border-2 border-slate-200 p-2">status</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <CustomerList customer={customer} key={customer.customerId} />
            ))}
          </tbody>
        </table>
      </div>

      <div></div>
    </div>
  );
}
