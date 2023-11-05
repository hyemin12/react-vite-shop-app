import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import cartSlice, { getTotalPrice } from "../../../store/cart/cart.slice";
import NavCartList from "./NavCartList";
import styles from "./NavCartBlock.module.scss";

const NavCartBlock = () => {
  const dispatch = useAppDispatch();
  const { totalPrice, products } = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    dispatch(getTotalPrice(products));
  });
  return (
    <div className={styles.nav_cart_block}>
      <NavCartList />
      <div className={styles.nav_cart_price}>
        <span>총 {products.length}개 |</span>{" "}
        <p>합계: $ {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default NavCartBlock;
