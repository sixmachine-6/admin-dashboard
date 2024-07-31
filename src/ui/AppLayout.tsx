import { Outlet } from "react-router-dom";
import Adminbar from "../components/dashboard/Adminbar";
import { Main } from "./Main";

export default function AppLayout() {
  return (
    <Main>
      <Adminbar />
      <div className="bg-lime-100 w-full  overflow-y-scroll">
        <Outlet />
      </div>
    </Main>
  );
}
