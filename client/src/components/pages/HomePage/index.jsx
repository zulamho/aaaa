import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/features/products";
import Header from "./Header";
import MainPages from "./MainPages";
import CircularProgress from "@material-ui/core/CircularProgress";
import Footer from "./Footer";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <CircularProgress disableShrink />;
  }

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <>
      <Header />
      <MainPages />
      <Footer />
    </>
  );
}

export default Home;
