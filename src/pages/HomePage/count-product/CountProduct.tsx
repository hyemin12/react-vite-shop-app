import React from "react";
import { useAppSelector } from "@hooks/redux";
import styles from "./CountProduct.module.scss";

const CountProduct = () => {
  const { isLoading, products } = useAppSelector(
    (state) => state.productsSlice
  );
  return (
    <div className={styles.count_products}>
      {!isLoading && <p>Showing {products.length} items</p>}{" "}
    </div>
  );
};

export default CountProduct;
