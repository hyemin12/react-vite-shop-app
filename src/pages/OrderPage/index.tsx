import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import OrderList from "./order-list/OrderList";
import { fetchOrder } from "../../store/order/order.slice";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import CartEmpty from "../../components/cart-empty/CartEmpty";

const OrderPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading, order } = useAppSelector((state) => state.orderSlice);
  const { isAuth, id } = useAuth();

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [id]);
  console.log(order);

  if (!isAuth) return <Navigate to="/" />;
  return (
    <div className="page">
      {!order.length ? (
        <CartEmpty title="주문 내역이" />
      ) : (
        <div className="container">
          <h1>주문 내역</h1>
          <OrderList />
        </div>
      )}
    </div>
  );
};

export default OrderPage;
