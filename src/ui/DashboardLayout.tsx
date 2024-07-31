import { ChildrenProps } from "../utils/helper";

export default function DashboardLayout({ children }: ChildrenProps) {
  return <main className="  w-full p-5">{children}</main>;
}
