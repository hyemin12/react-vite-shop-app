import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "src/hooks/redux";
import {
  decrementProduct,
  deleteFromCart,
  incrementProduct,
} from "src/store/cart/cart.slice";
import { Product } from "src/store/products/products.type";
import { price2decimal } from "src/utils/price2decimal";
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
    <tr>
      <td>
        <p>{index}</p>
      </td>
      <td>
        <Link to={`/card/${id}`} className={styles.cart_description}>
          <div className='td_image_wrapper'>
            <img src={image} alt={title} />
          </div>
          <div>
            <p className='td_category'>{category}</p>
            <h3 className='td_item_title'>{title}</h3>
          </div>
        </Link>
      </td>
      <td>
        <p>${price}</p>
      </td>
      <td>
        <div className={styles.cart_count}>
          <p>{quantity}</p>

          <div className={styles.cart_count_buttons}>
            <button
              disabled={quantity === 1}
              onClick={decrementItemCountHandler}
            >
              -
            </button>
            <button
              disabled={quantity === 10}
              onClick={incrementItemCountHandler}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>
        <p>${price2decimal(total)}</p>
      </td>
      <td>
        <button className='primary-button' onClick={deleteItemFromCartHandler}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
