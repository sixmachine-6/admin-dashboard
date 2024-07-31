import { LinkButton } from "../../ui/LinkButton";
import { MdDashboard } from "react-icons/md";
import { TbTransactionRupee } from "react-icons/tb";
import { FaShoppingBag } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import AdminbarList from "../../ui/AdminbarList";
export default function Adminbar() {
  return (
    <div className="basis-1/5 hidden lg:flex lg:flex-col">
      <AdminbarList title={"Dashboard"}>
        <LinkButton to="/admin/dashboard" Icon={MdDashboard}>
          Dashboard
        </LinkButton>

        <LinkButton to="/admin/customers" Icon={IoIosPeople}>
          Customers
        </LinkButton>
        <LinkButton to="/admin/transaction" Icon={TbTransactionRupee}>
          Transaction
        </LinkButton>
      </AdminbarList>

      <AdminbarList title="Product">
        <LinkButton to="/admin/products" Icon={FaShoppingBag}>
          Products
        </LinkButton>
        <LinkButton to="/admin/transaction" Icon={TbTransactionRupee}>
          Add Product
        </LinkButton>
      </AdminbarList>

      <AdminbarList title="Chart">
        <LinkButton to="/admin/transaction" Icon={TbTransactionRupee}>
          Customer Demo...
        </LinkButton>
        <LinkButton to="/admin/transaction" Icon={TbTransactionRupee}>
          Inventory
        </LinkButton>
      </AdminbarList>

      <AdminbarList title="Order">
        <LinkButton to="/admin/orders" Icon={FaShoppingCart}>
          Orders
        </LinkButton>
        <LinkButton to="/admin/transaction" Icon={TbTransactionRupee}>
          Order Detail
        </LinkButton>
        <LinkButton to="/admin/transaction" Icon={TbTransactionRupee}>
          Order Tracking
        </LinkButton>
      </AdminbarList>

      <AdminbarList title="Settings">
        <LinkButton to="/admin/transaction" Icon={TbTransactionRupee}>
          Settings
        </LinkButton>
        <LinkButton to="/admin/transaction" Icon={TbTransactionRupee}>
          Inventory
        </LinkButton>
      </AdminbarList>
    </div>
  );
}
