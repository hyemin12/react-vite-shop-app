import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getTotalPrice } from "../../../store/cart/cart.slice";
import NavCartList from "./NavCartList";
import styles from "./NavCartList.module.scss";

const NavCartBlock = () => {
  const dispatch = useAppDispatch();
  const { totalPrice, product } = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    dispatch(getTotalPrice(product));
  });
  return (
    <div className={styles.nav_cart_block}>
      <NavCartList />
      <div className={styles.nav_cart_price}>
        <p>합계: $ {totalPrice.toFixed(2)}</p>
      </div>
      <div className={styles.nav_cart_link}>
        <Link to="cart">장바구니로 이동</Link>
      </div>
    </div>
  );
};

export default NavCartBlock;
