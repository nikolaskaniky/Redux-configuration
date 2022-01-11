import { SELECTED_CATEGORY } from "../constants/category-constants";

export const getCategoryAction =
  (name, value) => async (dispatch, getState) => {
    {
      dispatch({
        type: SELECTED_CATEGORY,
        name: name,
        value: value,
      });
    }

    // sessionStorage.setItem(
    //   "categoryName",
    //   JSON.stringify(getState().category.categoryName)
    // );

    // sessionStorage.setItem(
    //   "categoryValue",
    //   JSON.stringify(getState().category.categoryValue)
    // );
  };
