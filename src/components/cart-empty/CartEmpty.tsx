import React from "react";
import styles from "./CartEmpty.module.scss";
import { Link, useNavigate } from "react-router-dom";

type CartEmptyProps = {
  title: string;
  text: string;
};
const CartEmpty: React.FC<CartEmptyProps> = ({ title, text }) => {
  const navigate = useNavigate();
  const moveToMainPageHandler = () => {
    navigate("/");
  };
  return (
    <div className={styles.cart_empty}>
      <img src="img/empty-cart.png" alt="빈 장바구니" />
      <h1>{title}이 없습니다.</h1>
      <p>{text}</p>
      <button className="primary-button" onClick={moveToMainPageHandler}>
        계속 쇼핑하기
      </button>
    </div>
  );
};

export default CartEmpty;
