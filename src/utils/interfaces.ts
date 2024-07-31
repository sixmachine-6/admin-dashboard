export interface TopProduct {
  product: {
    productId: string;
    productName: string;
    category: string;
    img: string;
    price: number;
    discount: number;
    quantity: number;
    review: number;
  };
}

export interface Product {
  product: {
    productId: string;
    productName: string;
    category: string;
    img: string;
    price: number;
    sku: string;
    description: string;
    quantityInStock: number;
    status: string;
    dateAdded: string;
  };
}
