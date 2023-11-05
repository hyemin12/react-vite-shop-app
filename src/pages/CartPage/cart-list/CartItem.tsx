import React from "react";
import { Link } from "react-router-dom";
import {
  decrementProduct,
  deleteFromCart,
  incrementProduct,
} from "@store/cart/cart.slice";
import { Product } from "@store/products/products.type";
import { useAppDispatch } from "@hooks/redux";
import { price2decimal } from "@utils/price2decimal";
import styles from "./CartItem.module.scss";

type CartItemProps = {
  item: Product;
  index: number;
};

const CartItem: React.FC<CartItemProps> = ({ item, index }) => {
  const { id, image, title, price, category, quantity, total } = item;
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
    <tr className={styles.cart_item}>
      <td>{index}</td>
      <td className={styles.cart_description}>
        <Link to={`/card/:id`}>
          <img src={image} alt={title} />
        </Link>
        <div>
          <h3>{category}</h3>
          <h2>{title}</h2>
        </div>
      </td>
      <td>${price}</td>
      <td>
        <div className={styles.cart_count}>
          <div>
            <button
              disabled={quantity === 1}
              onClick={decrementItemCountHandler}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              disabled={quantity === 10}
              onClick={incrementItemCountHandler}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>${price2decimal(total)}</td>
      <td>
        <button onClick={deleteItemFromCartHandler}>삭제하기</button>
      </td>
    </tr>
  );
};

export default CartItem;
