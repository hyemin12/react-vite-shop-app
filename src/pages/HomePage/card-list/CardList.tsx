import React, { useEffect } from "react";
import { fetchProducts } from "src/store/products/products.slice";
import { useAppDispatch, useAppSelector } from "src/hooks/redux";
import CardItem from "../card-item/CardItem";
import CardSkeleton from "../card-skeleton/CardSkeleton";
import styles from "./CardList.module.scss";

const CardList = () => {
  const dispatch = useAppDispatch();

  const { isLoading, products } = useAppSelector(
    (state) => state.productsSlice
  );
  const category = useAppSelector((state) => state.categoriesSlice);

  useEffect(() => {
    dispatch(fetchProducts(category?.toLowerCase()));
  }, [category]);

  if (isLoading) return <CardSkeleton />;

  return (
    <div className={styles.card_list}>
      {products &&
        products.map((product) => <CardItem key={product.id} {...product} />)}
    </div>
  );
};

export default CardList;
