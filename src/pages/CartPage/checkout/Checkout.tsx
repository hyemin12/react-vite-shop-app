import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { getTotalPrice, postOrder } from "@store/cart/cart.slice";
import useAuth from "@hooks/useAuth";
import styles from "./Checkout.module.scss";
import { toast } from "react-toastify";

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    dispatch(getTotalPrice());
  }, []);

  const { isAuth } = useAuth();

  const dispatch = useAppDispatch();

  const sendOrderHandler = () => {
    dispatch(postOrder(cart));
    navigate("/order");
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
