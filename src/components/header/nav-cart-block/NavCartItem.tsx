import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@hooks/redux";
import { AiOutlineDelete } from "react-icons/ai";
import { deleteFromCart } from "@store/cart/cart.slice";
import { Product } from "@store/products/products.type";
import { price2decimal } from "@utils/price2decimal";
import styles from "./NavCartItem.module.scss";
import { IconContext } from "react-icons/lib";

const NavCartItem: React.FC<Product> = (item) => {
  const { id, category, image, title, quantity, total } = item;

  const dispatch = useAppDispatch();

  const deleteItemCart = () => {
    dispatch(deleteFromCart(id));
  };
  return (
    <div className={styles.nav_cart_item}>
      <Link to={`/product/${id}`}>
        <div className={styles.nav_cart_item_image}>
          <img src={image} alt="product card" />
        </div>
      </Link>
      <div className={styles.nav_cart_description}>
        <p>{category}</p>
        <h4>{title}</h4>
        <p className={styles.nav_cart_quantity}>수량: {quantity}개</p>
      </div>
      <h4 className={styles.nav_cart_price}>${price2decimal(total)}</h4>
      <div>
        <span
          role="button"
          onClick={deleteItemCart}
          className={styles.nav_cart_delete}
        >
          <AiOutlineDelete />
        </span>
      </div>
    </div>
  );
};

export default NavCartItem;
