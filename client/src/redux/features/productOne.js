const initialState = {
  item: [],
  loading: false,
};
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case "product/pending":
      return {
        ...state,
        loading: true,
      };
    case "product/fulfilled":
      return {
        ...state,
        item: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}


