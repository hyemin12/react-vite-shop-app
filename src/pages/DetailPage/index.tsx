import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { fetchProduct } from "@store/products/product.slice";
import Loader from "@components/loader/Loader";
import AddToCartButton from "@components/button/AddToCartButton";
import MoveToCartButton from "@components/button/MoveToCartButton";
import styles from "./DetailPage.module.scss";

const DetailPage = () => {
  const { id } = useParams();
  const productId = Number(id);

  const dispatch = useAppDispatch();
  const { isLoading, product } = useAppSelector((state) => state.productSlice);
  const { products } = useAppSelector((state) => state.cartSlice);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, [id]);

  const includedCart = products.some((product) => product.id === productId);

  return (
    <div className="page">
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.card_wrapper}>
          <div className={styles.card_img}>
            <img src={product.image} alt="product card" />
          </div>
          <div className={styles.card_description}>
            <h3>{product.category}</h3>
            <h1>{product.title}</h1>

            <h4>$ {product.price}</h4>
            <p>{product.description}</p>
            <div>
              <AddToCartButton includedCart={includedCart} item={product} />
              <MoveToCartButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
