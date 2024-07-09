import React from "react";

import { useAppDispatch } from "src/hooks/redux";
import { addToCart } from "src/store/cart/cart.slice";
import { Product } from "src/store/products/products.type";

type AddToCartButtonProps = {
  includedCart: boolean;
  item: Product;
};

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  includedCart,
  item,
}) => {
  const dispatch = useAppDispatch();

  const addItemCartHandler = () => {
    dispatch(addToCart(item));
  };
  return (
    <button
      disabled={includedCart}
      onClick={() => !includedCart && addItemCartHandler()}
    >
      {includedCart ? "장바구니에 담긴 제품" : "장바구니에 담기"}
    </button>
  );
};

export default AddToCartButton;
