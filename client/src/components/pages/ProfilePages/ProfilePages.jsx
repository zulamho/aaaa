import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProducts, fetchProducts } from "../../../redux/features/products";
import Header from "../HomePage/Header";
import CircularProgress from "@material-ui/core/CircularProgress";
import Footer from "../HomePage/Footer";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";

function ProfilePages() {
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  //   if (loading) {
  //     return <CircularProgress disableShrink />;
  //   }

  //   if (error) {
  //     return <div>{error}</div>;
  //   }
  return (
    <>
      <EditProduct />
      <AddProduct />
      <Footer />
    </>
  );
}

export default ProfilePages;
