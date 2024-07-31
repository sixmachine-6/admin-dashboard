import { ReactNode } from "react";

interface AdminbarList {
  title: string;
  children?: ReactNode;
}
export default function AdminbarList({ title, children }: AdminbarList) {
  return (
    <div className="h-screen bg-neutral-100  px-4">
      <h3 className="px-3 my-2 text-slate-600 font-semibold">{title}</h3>
      <ul>{children}</ul>
    </div>
  );
}
