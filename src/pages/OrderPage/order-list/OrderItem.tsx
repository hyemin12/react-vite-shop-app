import React from "react";
import { Link } from "react-router-dom";
import styles from "./OrderItem.module.scss";

import { Product } from "../../../store/products/products.type";

const OrderItem: React.FC<Product> = (order) => {
  const { id, image, category, title, price, quantity, total } = order;

  return (
    <li className={styles.order_item}>
      <Link to={`/product/${id}`}>
        <img src={image} alt="product card" />
      </Link>
      <div className={styles.order_description}>
        <h4>{category}</h4>
        <h3>{title}</h3>
      </div>
      <div className={styles.order_price}>
        <h4>가격: </h4>
        <span>
          $ {price} x {quantity}{" "}
        </span>
      </div>
      <div className={styles.order_total}>
        <h4>합계 :</h4>
        <span>$ {total}</span>
      </div>
    </li>
  );
};

export default OrderItem;
