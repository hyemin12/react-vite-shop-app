import { setActiveCategory } from "@store/categories/categories.slice";
import { CategoriesName } from "@store/categories/categories.type";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import styles from "./CategoryTab.module.scss";

type CategoryTabProps = {
  text: string;
  categoryName: CategoriesName;
};

const CategortTab: React.FC<CategoryTabProps> = ({ text, categoryName }) => {
  const category = useAppSelector((state) => state.categoriesSlice);
  const dispatch = useAppDispatch();

  const changeActiveCategory = () => {
    dispatch(setActiveCategory(categoryName));
  };
  return (
    <button
      className={
        categoryName === category
          ? styles.active_category
          : styles.category_button
      }
      onClick={changeActiveCategory}
    >
      {text}
    </button>
  );
};

export default CategortTab;
