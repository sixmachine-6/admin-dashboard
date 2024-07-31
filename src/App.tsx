import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Product from "./pages/Product";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Order from "./pages/Order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="admin/dashboard" />} />
          <Route path="admin/dashboard" element={<Dashboard />} />
          <Route path="admin/products" element={<Product />} />
          <Route path="admin/orders" element={<Order />} />
          <Route path="admin/customers" element={<Customers />} />
          <Route path="admin/transaction" element={<Transactions />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
