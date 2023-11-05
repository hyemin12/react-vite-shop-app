import { Product } from "../products/products.type";

export type Order = {
  id: string;
  userId: string;
  totalPrice: number;
  products: Product[];
};
