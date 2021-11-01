import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/features/products";
import Footer from "../HomePage/Footer";
import Header from "../HomePage/Header";
import ProfilePages from "./ProfilePages";

function Profile() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.products.loading);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      <Header />
      <ProfilePages />
      <Footer />
    </>
  );
}

export default Profile;
