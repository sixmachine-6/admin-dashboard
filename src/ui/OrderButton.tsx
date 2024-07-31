import { ProductStatus } from "../enums/ProductStatus";
import { OrderKeys } from "./../enums/OrderKeys";

interface OrderButton {
  type: string;
  children: string;
}
export default function OrderButton({ type, children }: OrderButton) {
  let color;
  console.log(type);
  switch (type) {
    case OrderKeys.delievered: {
      color = "bg-green-400";
      break;
    }
    case OrderKeys.pending: {
      color = "bg-gray-400";
      break;
    }
    case OrderKeys.cancelled: {
      color = "bg-red-400";
      break;
    }
    case OrderKeys.shipped: {
      color = "bg-yellow-400";
      break;
    }
    case OrderKeys.processing: {
      color = "bg-blue-400";
      break;
    }
    case ProductStatus.active: {
      color = "bg-green-400";
      break;
    }
    case ProductStatus.outOfStock: {
      color = "bg-red-400";
      break;
    }
    case "Inactive": {
      color = "bg-red-400";
      break;
    }
  }
  console.log(color);
  return (
    <button className={`${color} px-2 py-1 text-white rounded-xl`}>
      {children}
    </button>
  );
}
