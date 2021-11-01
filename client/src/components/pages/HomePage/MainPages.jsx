import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  MenuItem,
  Button,
} from "@material-ui/core/";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { removeProducts } from "../../../redux/features/products";
import { NavLink, Link } from "react-router-dom";
import { userBasket } from "../../../redux/features/application";
import { useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    img: {
      width: "300px",
    },

    root: {
      maxWidth: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      margin: "0px 100px",
      boxShadow: "none",
    },
    media: {
      height: 140,
    },
    reklImg: {
      width: "600px",
    },
    reklText: {
      width: "600px",
      marginTop: "100px",
    },
    reklBlock: {
      width: "1200px",
      display: "flex",
      margin: "auto",
    },

    content: {
      width: "300px",
      marginBottom: "50px",
      border: "1px solid #FAFAFA",
      alignContent: "center",
      "&:hover": {
        background: "#f2f2f2",
      },
    },

    productinfo: {
      marginLeft: "15px",
      fontSize: "27px",
      fontWeight: "600",
      fontFamily: "Hind Siliguri",
    },

    productname: {
      marginTop: "15px",
      fontSize: "20px",
      fontWeight: "400",
      fontFamily: "Hind Siliguri",
    },

    buy: {
      marginLeft: "17px",
    },

    h2: {
      marginBottom: "0px",
    },
    t: {
      fontFamily: "Hind Siliguri",
    },
    firstbrand: {
      color: "#C72535",
      fontFamily: "Hind Siliguri",
    },
    fbname: {
      fontSize: "61px",
      lineHeight: "1.4",
    },
    fbnameline: {
      fontSize: "61px",
      color: "#247CC0",
      background: "#E9F2F9",
      display: "inline",
      padding: "0px 10px",
    },

    fbinfo: {
      marginTop: "20px",
      fontFamily: "Hind Siliguri",
      color: "#030D15",
      opacity: "90%",
    },

    fbpricesale: {
      display: "flex",
      alignItems: "baseline",
    },
    btn: {
      marginTop: "30px",
      padding: "12px 25px",
      fontSize: "20px",
    },

    btns: {
      marginLeft: "15px",
      marginTop: "10px",
      padding: "12px 15px",
      fontSize: "16px",
      marginBottom: "15px",
    },
    fbsale: {
      fontSize: "20px",
      display: "inline",
      marginLeft: "35px",
    },
    fbprice: {
      fontSize: "20px",
      display: "inline",
      marginLeft: "18px",
      textDecoration: "line-through",
      color: "#030D15",
      opacity: "50%",
    },
    allbrand: {
      color: "#C72535",
      fontFamily: "Hind Siliguri",
      textAlign: "center",
    },
    allbrands: {
      color: "black",
      fontFamily: "Hind Siliguri",
      textAlign: "center",
      fontSize: "30px",
      fontWeight: "600",
      marginTop: "10px",
    },

    info: {
      height: "280px",
    },
    arr: {
      margin: "auto",
      width: "550px",
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "30px",
      marginTop: "20px",
    },

    spisok: {
      fontFamily: "Hind Siliguri",
      fontSize: "14px",
    },
    spisok1: {
      fontFamily: "Hind Siliguri",
      fontSize: "14px",
      color: "#C72535",
      fontWeight: "500",
    },
  })
);

function MainPages() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const baskets = useSelector((state) => state.application.basket);
  const products = useSelector((state) => {
    const { products } = state;

    if (products.filter === "") {
      return products.product;
    }

    return products.product.filter((item) => {
      console.log(products);
      return item.name.toLowerCase().includes(products.filter.toLowerCase());
    });
  });

  const handleAddProductBasket = (item) => {
    dispatch(userBasket(item));
  };

  const handleDelete = (id) => {
    dispatch(removeProducts(id));
  };
  return (
    <>
      <div className={classes.reklBlock}>
        <div className={classes.reklText}>
          <Typography className={classes.firstbrand}>
            FAVORITE BRANDS
          </Typography>
          <Typography className={classes.fbname}>
            <Typography className={classes.fbnameline}>
              {" "}
              XIRO XPLORER V
            </Typography>{" "}
            1080P Full HD
          </Typography>
          <Typography className={classes.fbinfo}>
            {" "}
            Встречайте один из самых крутых дронов для съемки видео — Xiro
            Xplorer V. Этот коптер, вобрал в себя самые передовые технологии и
            инновации, оставив всех своих конкурентов далеко позади.
          </Typography>
          <Grid className={classes.fbpricesale}>
            <Button variant="contained" color="primary" className={classes.btn}>
              <Link to="/product/613f69afd48460f130ce27cf"> Купить</Link>
            </Button>

            <Typography className={classes.fbsale}>
              $ 249.90{" "}
              <Typography className={classes.fbprice}>$ 249.99</Typography>
            </Typography>
          </Grid>
        </div>
        <div>
          <img
            className={classes.reklImg}
            src="https://img.tttcdn.com/product/xy/2000/2000/p/gu1/R/S/RM6694US/RM6694US-1-cb49-CRqb.jpg"
            alt=""
          />
        </div>
      </div>
      <Grid>
        <Typography className={classes.allbrand}>NEW PRODUCTS</Typography>
        <Typography className={classes.allbrands}>POPULAR PRODUCTS</Typography>
        <Grid className={classes.arr}>
          <Typography className={classes.spisok1}>BEST SELLERS</Typography>
          <Typography className={classes.spisok}>SPECIAL OFFERS</Typography>
          <Typography className={classes.spisok}>FEATURED IN</Typography>
          <Typography className={classes.spisok}>RECENT ARRIVAL</Typography>
        </Grid>
        <Card spacing={5} className={classes.root}>
          {products?.map((item) => {
            return (
              <Grid className={classes.content}>
                <Grid className={classes.info}>
                  <NavLink to={`/product/${item._id}`}>
                    <CardMedia
                      className={classes.media}
                      image={item.pathImages}
                    />
                  </NavLink>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.productname}
                    >
                      {item.name}
                    </Typography>
                  </CardContent>
                  <Box className={classes.productinfo}>{item.price} ₽</Box>
                </Grid>

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btns}
                  onClick={() => {
                    handleAddProductBasket(item);
                  }}
                >
                  Купить
                </Button>
                <Grid></Grid>
              </Grid>
            );
          })}
        </Card>
      </Grid>
    </>
  );
}

export default MainPages;
