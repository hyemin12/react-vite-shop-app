import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import styles from "./CardItem.module.scss";
import { addToCart } from "../../../store/cart/cart.slice";

const CardItem = ({ item }) => {
  const { products } = useAppSelector((state) => state.cartSlice);
  const dispatch = useAppDispatch();
  const { id, image, title, price } = item;

  const productMatching = products.some((product) => product.id === id);
  console.log(products, productMatching, id);

  const addItemCartHandler = () => {
    console.log(item);
    dispatch(addToCart(item));
  };

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${id}`}>
        <img src={image} width={"80%"} height={"200px"} alt="product card" />
      </Link>
      <h5>{title.substring(0, 15)}...</h5>
      <div>
        <button
          disabled={productMatching}
          onClick={!productMatching && addItemCartHandler}
        >
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>${price}</p>
      </div>
    </li>
  );
};

export default CardItem;
