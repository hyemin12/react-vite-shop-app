import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getTotalPrice, postOrder } from "../../../store/cart/cart.slice";
import useAuth from "../../../hooks/useAuth";
import styles from "./Checkout.module.scss";
const Checkout = () => {
  const cart = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, []);

  const { isAuth } = useAuth();

  const dispatch = useAppDispatch();

  const sendOrderHandler = () => {
    dispatch(postOrder(cart));
  };

  return (
    <div className={styles.checkout}>
      {isAuth ? (
        <button onClick={sendOrderHandler} className={styles.checkout_button}>
          주문하기
        </button>
      ) : (
        <Link className={styles.checkout_button} to="/login">
          로그인하고 주문하기
        </Link>
      )}
    </div>
  );
};

export default Checkout;
