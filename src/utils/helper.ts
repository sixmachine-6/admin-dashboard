import { ReactNode } from "react";

export interface ChildrenProps {
  children: ReactNode;
}

export function transformDate(date: Date) {
  return date.toLocaleDateString();
}
