import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getTotalPrice } from "../../../store/cart/cart.slice";
import NavCartList from "./NavCartList";
import { price2decimal } from "../../../utils/price2decimal";
import styles from "./NavCartBlock.module.scss";

const NavCartBlock = () => {
  const dispatch = useAppDispatch();
  const { totalPrice, products } = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, [products]);

  return (
    <div className={styles.nav_cart_block}>
      <NavCartList />
      <div className={styles.nav_cart_price}>
        <span>총 {products.length}개 |</span>{" "}
        <p>합계: $ {price2decimal(totalPrice)}</p>
      </div>
    </div>
  );
};

export default NavCartBlock;
