import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface Link {
  to: string;
  children: string;
  Icon: IconType;
}

export const LinkButton: React.FC<Link> = ({ to, children, Icon }) => {
  return (
    <Link
      to={to}
      className="flex items-center bg-yellow gap-2 mx-2 my-1 hover:text-red-500"
    >
      <Icon className="text-xl" />
      {children}
    </Link>
  );
};
