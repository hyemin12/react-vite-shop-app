import React, { useEffect } from "react";
import { fetchProducts } from "../../../store/products/products.slice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import CardItem from "../card-item/CardItem";
import styles from "./CardList.module.scss";
import CardSkeleton from "../card-skeleton/CardSkeleton";

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
        products.map((product) => <CardItem key={product.id} item={product} />)}
    </div>
  );
};

export default CardList;
