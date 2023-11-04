import React from "react";
import styles from "./FilterCategory.module.scss";
import CategortTab from "./CategortTab";
import { CategoriesName } from "../../../store/categories/categories.type";

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
