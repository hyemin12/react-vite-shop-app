import { useEffect } from "react";

import useAuth from "src/hooks/useAuth";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import CartEmpty from "src/components/cart-empty/CartEmpty";
import Loader from "src/components/loader/Loader";
import OrderList from "./order-list/OrderList";
import { fetchOrder } from "src/store/order/order.slice";
import useNavigationHandlers from "src/hooks/useNavigationHandlers";

const OrderPage = () => {
  const dispatch = useAppDispatch();
  const { moveToLoginPageHandler } = useNavigationHandlers();
  const { isLoading, order } = useAppSelector((state) => state.orderSlice);
  const { isAuth, id } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      moveToLoginPageHandler();
      return;
    }

    dispatch(fetchOrder(id));
  }, [isAuth, id]);

  if (!isAuth) return null;
  if (isLoading)
    return (
      <div className='loading-container'>
        <Loader />
      </div>
    );

  return (
    <div className='page'>
      {!order.length ? (
        <CartEmpty
          title='구매 내역'
          text='원하는 상품을 장바구니에 추가하고 주문해보세요!'
        />
      ) : (
        <div className='container'>
          <h1>주문 내역</h1>
          <OrderList />
        </div>
      )}
    </div>
  );
};

export default OrderPage;
