const initialState = {
  items: [],
  loading: false,
};
export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "product/category/pending":
      return {
        ...state,
        loading: true,
      };
    case "product/category/fulfilled":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export const loadCategories = () => {
  return async (dispatch) => {
    dispatch({ type: "product/category/pending" });

    const res = await fetch("/category");
    const json = await res.json();

    dispatch({ type: "product/category/fulfilled", payload: json });
  };
};
