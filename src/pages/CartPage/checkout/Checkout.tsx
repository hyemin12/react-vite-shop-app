import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import { getTotalPrice, postOrder } from "src/store/cart/cart.slice";
import useAuth from "src/hooks/useAuth";
import styles from "./Checkout.module.scss";

const Checkout = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartSlice);
  const { isAuth } = useAuth();

  useEffect(() => {
    dispatch(getTotalPrice());
  }, []);

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
        <Link className={styles.checkout_button} to='/login'>
          로그인하고 주문하기
        </Link>
      )}
    </div>
  );
};

export default Checkout;
