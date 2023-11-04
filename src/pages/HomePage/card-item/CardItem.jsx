import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import styles from "./CardItem.module.scss";

const CardItem = ({ item }) => {
  const { products } = useAppSelector((state) => state.cartSlice);
  const { id, image, title, price } = item;

  const productMatching = products.some((product) => product.id === id);

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${id}`}>
        <img src={image} width={"80%"} height={"200px"} alt="product card" />
      </Link>
      <h5>{title.substring(0, 15)}...</h5>
      <div>
        <button disabled={productMatching}>
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>${price}</p>
      </div>
    </li>
  );
};

export default CardItem;
