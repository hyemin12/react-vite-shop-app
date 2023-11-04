import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getTotalPrice } from "../../../store/cart/cart.slice";
import useAuth from "../../../hooks/useAuth";
import styles from "./Checkout.module.scss";

const Checkout = () => {
  const cart = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, []);

  const isAuth = useAuth();

  const dispatch = useAppDispatch();

  return (
    <div className={styles.checkout}>
      <div>
        <p>
          {" "}
          <span>합계:</span> $ {cart.totalPrice.toFixed(2)}
        </p>

        {isAuth ? (
          <button className={styles.checkout_button}>주문하기</button>
        ) : (
          <Link className={styles.checkout_button} to="/login">
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

export default Checkout;
