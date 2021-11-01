import {
  Container,
  Select,
  FormControl,
  MenuItem,
  Box,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Link, NavLink } from "react-router-dom";
import { setFilterText } from "../../../redux/features/products";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";

import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { useEffect } from "react";
import { loadCategories } from "../../../redux/features/categories";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    cardGrid: {
      backgroundColor: "white",
      padding: "0",
    },

    head: {
      width: "100%",
      height: "90px",
      background: " #F2F2F2",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    all: {},

    cardH2: {
      color: "black",
      textDecoration: "none",
      marginLeft: "50px",
    },

    links: {
      color: "white",
      width: "400px",
      display: "flex",
      justifyContent: "space-around",
    },

    link: {
      marginTop: "5px",
      color: "black",
      textDecoration: "none",
      marginRight: "20px",
    },
    cart: {
      color: "black",
    },
    select: {
      display: "flex",
      alignItems: "baseline",
      width: "140px",
    },
    sel: {
      marginRight: "110px",
      width: "140px",
      paddingLeft: "10px",
      backgroundColor: "#F2F2F2",
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#F2F2F9",
      ginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
        maxWidth: "200px",
      },
    },
    searchIcon: {
      color: "black",
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "0ch",
        "&:focus": {
          width: "20ch",
          paddingRight: "110px",
        },
      },
    },
    nav: {
      width: "500px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    logoimg: {
      height: "70px",
      marginTop: "10px",
    },

    logolink: {
      display: "flex",
      alignItems: "center",
      fontSize: "14px",
      marginLeft: "40px",
      textDecoration: "none",
      color: "primary",
      fontWeight: "700",
    },
    logolinks: {
      marginTop: "13px",
    },
    navcat: {
      textDecoration: "none",

      color: "black",
    },
  })
);

function Header() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.products.filter);
  const categories = useSelector((state) => state.categories.items);

  const token = useSelector((state) => state.application.token);
  const [category, setCategory] = useState("");

  const handleAddCategory = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  if (!token) {
    return (
      <Container className={classes.cardGrid} maxWidth="100%">
        <Grid container className={classes.all}>
          <Grid item className={classes.head}>
            <Grid>
              <Typography gutterBottom variant="h5" component="h2">
                <NavLink
                  to="/"
                  className={classes.logolink}
                >
                  <Grid className={classes.logolinks}>QUADRO</Grid>
                  <img
                    className={classes.logoimg}
                    src="https://raw.githubusercontent.com/thebestdevelopering/quadcopter/main/client/src/11221.png"
                    alt=""
                  />
                </NavLink>
              </Typography>
            </Grid>
            <Paper className={classes.select}>
              <FormControl>
                <Select
                  id="demo-controlled-open-select"
                  value={category}
                  onChange={handleAddCategory}
                  className={classes.sel}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="" disabled>
                    Категория
                  </MenuItem>
                  {categories.map((item) => (
                    <MenuItem key={item.value} value={item._id}>
                      <Link
                        textDecoration="none"
                        to={`/category/${item._id}`}
                        className={classes.navcat}
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Paper>
            <Grid className={classes.nav}>
              <Box className={classes.search}>
                <Box className={classes.searchIcon}>
                  <SearchIcon />
                </Box>

                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                  value={filter}
                  onChange={(e) => dispatch(setFilterText(e.target.value))}
                />
              </Box>
              <ShoppingCartOutlinedIcon className={classes.cart} to="/sss" />
              <NavLink className={classes.link} to={"/signin"}>
                <AccountCircleOutlinedIcon />
              </NavLink>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
  return (
    <Container className={classes.cardGrid} maxWidth="100%">
      <Grid container className={classes.all}>
        <Grid item className={classes.head}>
          <Grid>
            <Typography gutterBottom variant="h5" component="h2">
              <NavLink
                to="/"
                className={classes.logolink}
              >
                <Grid className={classes.logolinks}>QUADRO</Grid>
                <img
                  className={classes.logoimg}
                  src="https://raw.githubusercontent.com/thebestdevelopering/quadcopter/main/client/src/11221.png"
                  alt=""
                />
              </NavLink>
            </Typography>
          </Grid>
          <Paper className={classes.select}>
            <FormControl>
              <Select
                id="demo-controlled-open-select"
                value={category}
                onChange={handleAddCategory}
                className={classes.sel}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  Категория
                </MenuItem>
                {categories.map((item) => (
                  <MenuItem key={item.value} value={item._id}>
                    <Link
                      textDecoration="none"
                      to={`/category/${item._id}`}
                      className={classes.navcat}
                    >
                      {item.name}
                    </Link>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Paper>
          <Grid className={classes.nav}>
            <Box className={classes.search}>
              <Box className={classes.searchIcon}>
                <SearchIcon />
              </Box>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={filter}
                onChange={(e) => dispatch(setFilterText(e.target.value))}
              />
            </Box>
            <NavLink to="/user/basket"> 
              <ShoppingCartOutlinedIcon className={classes.cart} /> 
            </NavLink>
            <NavLink className={classes.link} to={`/profilepage/`}>
              <AccountCircleOutlinedIcon />
            </NavLink>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Header;
