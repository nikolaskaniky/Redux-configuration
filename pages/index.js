import React from "react";
import classes from "../styles/navbar/navbar.module.scss";
import { getCategoryAction } from "../redux/actions/category-actions";
import { useDispatch, useSelector } from "react-redux";

const DUMMY_LIST = [
  {
    name: "HOME",
  },

  {
    name: "SHOP",
  },

  {
    name: "OPTIONS",
  },

  {
    name: "MENU",
  },
];

const HomePage = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const selectedCategoryHandler = (name, value) =>
    dispatch(getCategoryAction(name, value));

  return (
    <header className={classes.navbar}>
      <ul>
        {DUMMY_LIST.map((item, i) => (
          <li
            key={i}
            onClick={() => dispatch(getCategoryAction(item.name, i))}
            className={
              category.categoryName === item.name ? classes.active : undefined
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default HomePage;
