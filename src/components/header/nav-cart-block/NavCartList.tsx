import React from "react";
import { useAppSelector } from "@hooks/redux";
import NavCartItem from "./NavCartItem";
import styles from "./NavCartList.module.scss";

const NavCartList = () => {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <div className={styles.nav_cart_list}>
      {products.map((item) => (
        <NavCartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default NavCartList;
