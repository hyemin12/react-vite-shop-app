import React from "react";
import FilterCategory from "./filter-category/FilterCategory";
import CardList from "./card-list/CardList";
import CountProduct from "./count-product/CountProduct";

const HomePage = () => {
  return (
    <div className="page">
      <div className="container">
        <h1>Products</h1>
        <FilterCategory />
        <CountProduct />
        <CardList />
      </div>
    </div>
  );
};

export default HomePage;
