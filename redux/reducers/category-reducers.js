import { SELECTED_CATEGORY } from "../constants/category-constants";

const initialState = {
  categoryName: "home",
  categoryValue: 0,
};

export const categoryReducer = (state = initialState, action) => {
  const { categoryName, categoryValue } = initialState;
  const { name, value } = action;

  switch (action.type) {
    case SELECTED_CATEGORY:
      return {
        categoryName: name,
        categoryValue: value,
      };

    default:
      return state;
  }
};
