import { useAppSelector } from "src/hooks/redux";
import CartEmpty from "src/components/cart-empty/CartEmpty";
import CartList from "./cart-list/CartList";
import Checkout from "./checkout/Checkout";

const CartPage = () => {
  const { products } = useAppSelector((state) => state.cartSlice);
  return (
    <div className='page'>
      {!products.length ? (
        <CartEmpty
          title='장바구니에 담긴 상품'
          text='원하는 상품을 장바구니에 담아보세요!'
        />
      ) : (
        <div className='container'>
          <h1>장바구니</h1>
          <CartList />
          <Checkout />
        </div>
      )}
    </div>
  );
};
export default CartPage;
