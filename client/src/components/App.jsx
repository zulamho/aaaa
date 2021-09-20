import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./pages/HomePage";
import AddProduct from "./pages/ProfilePages/AddProduct";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import MainCategories from "./pages/HomePage/MainCategories";
import EditProduct from "./pages/ProfilePages/EditProduct";
import MainPagesProduct from "./pages/HomePage/MainPagesProduct";
import ProfilePages from "./pages/ProfilePages/ProfilePages";
import Basket from "./pages/HomePage/Basket";

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

        <Route path="/product/:id" exact>
          <MainPagesProduct />
        </Route>

        <Route path="/edit/:id" exact>
          <EditProduct />
        </Route>

        <Route path="/category/:id" exact>
          <MainCategories />
        </Route>
        <Route path="/profilePage" exact>
          <ProfilePages />
        </Route>
        <Route path="/user/basket" exact>
          <Basket />
        </Route>

        <Redirect to="/signin" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
