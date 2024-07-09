import React from "react";
import { useAppSelector } from "src/hooks/redux";
import CartItem from "../cart-item/CartItem";
import styles from "./CartList.module.scss";
import { price2decimal } from "src/utils/price2decimal";

const CartList = () => {
  const { products, totalPrice } = useAppSelector((state) => state.cartSlice);
  return (
    <table className={styles.cart_list}>
      <thead>
        <tr className={styles.cart_thead_tr}>
          <th></th>
          <th>상품명</th>
          <th>판매가</th>
          <th>수량</th>
          <th>주문 금액</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, idx) => (
          <CartItem item={product} key={product.id} index={idx + 1} />
        ))}
      </tbody>
      <tfoot className={styles.cart_tfoot}>
        <tr>
          <td colSpan={6}>
            <h2>
              <span> 최종 결제 금액 = </span> ${price2decimal(totalPrice)}
            </h2>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default CartList;
