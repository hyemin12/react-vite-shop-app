import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "@hooks/useAuth";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { fetchOrder } from "@store/order/order.slice";
import CartEmpty from "@components/cart-empty/CartEmpty";
import Loader from "@components/loader/Loader";
import OrderList from "./order-list/OrderList";

const OrderPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLoading, order } = useAppSelector((state) => state.orderSlice);

  const { isAuth, id } = useAuth();

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [id]);

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth]);
  console.log(isAuth, id);

  if (!isAuth) return null;
  if (isLoading) return <Loader />;
  return (
    <div className="page">
      {!order.length ? (
        <CartEmpty
          title="구매 내역"
          text="원하는 상품을 장바구니에 추가하고 주문해보세요!"
        />
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
