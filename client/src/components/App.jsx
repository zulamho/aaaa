import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MainCategories from "./pages/HomePage/MainCategories";
import EditProduct from "./pages/ProfilePages/EditProduct";
import Profile from "./pages/ProfilePages";
import Basket from "./pages/HomePage/basket";
import MainPagesProduct from "./pages/HomePage/MainPagesProduct";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" exact>
          <SignUpPage />
        </Route>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/edit/:id" exact>
          <EditProduct />
        </Route>
        <Route path="/category/:id" exact>
          <MainCategories />
        </Route>
        <Route path="/profilePage" exact>
          <Profile />
        </Route>
        <Route path="/user/basket" exact>
          <Basket />
        </Route>
        <Route path="/product/:id" exact>
          <MainPagesProduct />
        </Route>
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
