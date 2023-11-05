import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/redux";
import { deleteFromCart } from "../../../store/cart/cart.slice";
import { AiOutlineDelete } from "react-icons/ai";
import styles from "./NavCartItem.module.scss";

const NavCartItem = (item) => {
  const { id, category, image, title, price, quantity, total } = item;

  const dispatch = useAppDispatch();

  const deleteItemCart = () => {
    dispatch(deleteFromCart(id));
  };
  return (
    <div className={styles.nav_cart_item}>
      <Link to={`/product/${id}`}>
        {" "}
        <img src={image} alt="product card" />
      </Link>
      <div className={styles.nav_cart_description}>
        <h3>{category}</h3>
        <h2>{title}</h2>
        <span>
          {price} x {quantity} = $ {total.toFixed(2)}
        </span>
      </div>
      <button onClick={deleteItemCart} className={styles.nav_cart_delete}>
        <AiOutlineDelete />
      </button>
    </div>
  );
};

export default NavCartItem;
