import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import application from "./features/application";
import products from "./features/products";
import { composeWithDevTools } from "redux-devtools-extension";
import categories from "./features/categories";

export const store = createStore(
  combineReducers({
    application,
    products,
    categories,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
