import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeCategory,
  loadCategories,
} from "../../../redux/features/categories";
import { NavLink, useParams } from "react-router-dom";
import { fetchProductsCategory } from "../../../redux/features/products";
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
import { removeProducts } from "../../../redux/features/products";
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "gainsboro",
      padding: "0",
    },
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
      marginBottom: "20px",
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
    nameCategory: {
      color: "black",
      textDecoration: "none",
      fontFamily: "Hind Siliguri",
      "&:hover": {
        color: "#C72535",
      },
    },
  })
);

function MainCategories(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const products = useSelector((state) => state.products.product);
  const categories = useSelector((state) => state.categories.items);
  const loading = useSelector((state) => state.categories.loadCategories);
  const token = useSelector((state) => state.application.token);

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProductsCategory(id));
  }, [dispatch, id]);

  if (loading) {
    return <div>...</div>;
  }

  return (
    <>
      <Header />
      <Grid>
        <hr />
        <Paper className={classes.root}>
          {categories.map((item) => (
            <Link className={classes.nameCategory} to={`/category/${item._id}`}>
              <Tab label={item.name} to={`/category/${item._id}`} />
            </Link>
          ))}
        </Paper>
        <hr />
        <Card spacing={5} className={classes.root}>
          {products === undefined
            ? ""
            : products.map((item) => {
                return (
                  <Grid className={classes.content}>
                    <Grid className={classes.info}>
                      <NavLink to={`/product/${item._id}`}>
                        <CardMedia
                          className={classes.media}
                          image={`/${item.pathImages}`}
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

                      <Box className={classes.productinfo}>{item.price} P</Box>
                    </Grid>
                    <Button
                      variant="contained"
                      color="primary"
                      className={classes.btns}
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
export default MainCategories;
