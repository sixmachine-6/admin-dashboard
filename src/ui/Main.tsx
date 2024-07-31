import { ChildrenProps } from "../utils/helper";

export const Main: React.FC<ChildrenProps> = ({ children }) => {
  return <main className="flex h-screen">{children}</main>;
};
