import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import AddToCartButton from "../../../components/button/AddToCartButton";
import { Product } from "../../../store/products/products.type";
import styles from "./CardItem.module.scss";

const CardItem: React.FC<Product> = (product) => {
  const { products } = useAppSelector((state) => state.cartSlice);

  const { id, image, title, price } = product;

  const includedCart = products.some((product) => product.id === id);

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${id}`}>
        <img src={image} width={"80%"} height={"200px"} alt="product card" />
      </Link>
      <h5>{title.substring(0, 15)}...</h5>

      <p>${price}</p>

      <AddToCartButton includedCart={includedCart} item={product} />
    </li>
  );
};

export default CardItem;
