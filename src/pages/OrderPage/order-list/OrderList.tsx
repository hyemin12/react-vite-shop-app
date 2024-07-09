import { useAppSelector } from "src/hooks/redux";
import { price2decimal } from "src/utils/price2decimal";
import OrderItem from "./OrderItem";
import styles from "./OrderList.module.scss";

const OrderList = () => {
  const { order } = useAppSelector((state) => state.orderSlice);

  return (
    <ul className={styles.orders}>
      {order.map(({ id, totalPrice, products }) => (
        <li key={id}>
          <div className={styles.order_header}>
            <h3>주문 번호_{id}</h3>
            <p>합계: $ {price2decimal(totalPrice)}</p>
          </div>
          <div className={styles.orders_list}>
            <table className={styles.cart_list}>
              <thead>
                <tr className={styles.cart_thead_tr}>
                  <th>번호</th>
                  <th>상품명</th>
                  <th>수량</th>
                  <th>주문 금액</th>
                </tr>
              </thead>
              <tbody>
                {products.map((order, idx) => (
                  <OrderItem key={order.id} idx={idx + 1} order={order} />
                ))}
              </tbody>
            </table>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default OrderList;
