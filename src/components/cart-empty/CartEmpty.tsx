import React from "react";
import styles from "./CartEmpty.module.scss";
import { Link, useNavigate } from "react-router-dom";

type CartEmptyProps = {
  title: string;
};
const CartEmpty: React.FC<CartEmptyProps> = ({ title }) => {
  const navigate = useNavigate();
  const moveToMainPageHandler = () => {
    navigate("/");
  };
  return (
    <div className={styles.cart_empty}>
      <img src="img/empty-cart.png" alt="빈 장바구니" />
      <h1>{title} 비어있습니다.</h1>
      <p>상품을 추가해보세요</p>
      <button className="primary-btn" onClick={moveToMainPageHandler}>
        계속 쇼핑하기
      </button>
    </div>
  );
};

export default CartEmpty;
