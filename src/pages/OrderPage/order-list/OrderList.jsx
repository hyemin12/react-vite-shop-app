import { useAppSelector } from "../../../hooks/redux";
import OrderItem from "./OrderItem";
import styles from "./OrderList.module.scss";

const OrderList = () => {
  const { order } = useAppSelector((state) => state.orderSlice);
  return (
    <div className={styles.orders}>
      {order.map((item) => (
        <div key={item.id}>
          <div className={styles.order_header}>
            <h3>주문 번호_{item.id}</h3>
            <p>합계: $ {item.totalPrice.toFixed(2)}</p>
          </div>

          <ul className={styles.orders_list}>
            {item.products.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default OrderList;
