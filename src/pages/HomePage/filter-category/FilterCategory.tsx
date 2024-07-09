import React from "react";
import { CategoriesName } from "src/store/categories/categories.type";
import styles from "./FilterCategory.module.scss";
import CategortTab from "./CategortTab";

const FilterCategory = () => {
  return (
    <div className={styles.filter_category}>
      {Object.entries(CategoriesName).map(([keyName, value]) => (
        <CategortTab text={value} categoryName={value} key={keyName} />
      ))}
    </div>
  );
};

export default FilterCategory;
