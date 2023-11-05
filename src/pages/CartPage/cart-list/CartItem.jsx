import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import {
  decrementProduct,
  deleteFromCart,
  incrementProduct,
} from "../../../store/cart/cart.slice";
import styles from "./CartItem.module.scss";

const CartItem = ({ id, image, title, price, category, quantity, total }) => {
  const dispatch = useAppDispatch();
  const deleteItemFromCartHandler = () => {
    dispatch(deleteFromCart(id));
  };
  const incrementItemCountHandler = () => {
    dispatch(incrementProduct(id));
  };
  const decrementItemCountHandler = () => {
    dispatch(decrementProduct(id));
  };
  return (
    <div className={styles.cart_item}>
      <Link to={`/card/:id`}>
        <img src={image} alt={title} />
      </Link>
      <div className={styles.cart_description}>
        <h3>{category}</h3>
        <h2>{title}</h2>
        <span>
          {price} x {quantity} = $ {total.toFixed(2)}
        </span>
      </div>
      <div className={styles.cart_count}>
        <div>
          <button
            disabled={quantity === 1}
            onClick={decrementItemCountHandler}
            className={styles.cart_button}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            disabled={quantity === 10}
            onClick={incrementItemCountHandler}
            className={styles.cart_button}
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={deleteItemFromCartHandler}
        className={styles.cart_button_delete}
      >
        삭제하기
      </button>
    </div>
  );
};

export default CartItem;
