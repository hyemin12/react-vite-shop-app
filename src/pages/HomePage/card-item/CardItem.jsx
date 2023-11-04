import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import AddToCartButton from "../../../components/button/AddToCartButton";
import styles from "./CardItem.module.scss";

const CardItem = ({ item }) => {
  const { products } = useAppSelector((state) => state.cartSlice);

  const { id, image, title, price } = item;

  const includedCart = products.some((product) => product.id === id);

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${id}`}>
        <img src={image} width={"80%"} height={"200px"} alt="product card" />
      </Link>
      <h5>{title.substring(0, 15)}...</h5>
      <div>
        <AddToCartButton includedCart={includedCart} item={item} />

        <p>${price}</p>
      </div>
    </li>
  );
};

export default CardItem;
