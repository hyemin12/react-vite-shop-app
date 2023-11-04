import React from "react";
import { useAppSelector } from "../../../hooks/redux";
import styles from "./CartList.module.scss";
import CartItem from "./CartItem";

const CartList = () => {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <div className={styles.cart_list}>
      {products.map((product) => (
        <CartItem {...product} key={product.id} />
      ))}
    </div>
  );
};

export default CartList;
