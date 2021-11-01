import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Box,
  Grid,
  Select,
  MenuItem,
  IconButton,
} from "@material-ui/core";
import { addImage, addProduct } from "../../../redux/features/products";
import { loadCategories } from "../../../redux/features/categories";
import { useEffect } from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    rootlabel: {
      marginLeft: "0px",
    },
    inputs: {
      display: "none",
    },
    description: {
      width: "640px",
    },
    content: {
      display: "flex",
    },
    container: {
      width: "100%",
      maxWidth: "100%",
      margin: "0px",
      padding: "0px",
    },
    rightbox: {
      width: "50%",
    },
    leftbox: {
      width: "50%",
    },
    input: {
      width: "320px",
      marginBottom: "20px",
    },
    priceinp: {
      width: "320px",
      marginBottom: "20px",
      marginLeft: "20px",
    },
    numinp: {
      width: "320px",
      marginBottom: "20px",
      marginLeft: "20px",
    },
    inputcat: {
      width: "320px",
      height: "56px",
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 18,
      opacity: "60%",
      padding: "10px 26px 10px 12px",
      marginBottom: "20px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 1,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
    imginput: {
      height: "40px",
    },
    btninput: {
      marginBottom: "20px",
    },
  })
);

function ProfilePages() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.application.token);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [description, setDescription] = useState("");
  const categories = useSelector((state) => state.categories.items);

  const handleAddName = (e) => {
    setName(e.target.value);
  };

  const handleAddPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAddCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleAddNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleAddDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddImage = async (e) => {
    await dispatch(addImage(e));
  };
  const handleAddProduct = () => {
    dispatch(addProduct(name, price, category, number, description));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  return (
    <Container className={classes.container}>
      <Grid className={classes.content}>
        <Grid className={classes.rightbox}>aaa</Grid>
        <Grid className={classes.leftbox}>
          <h2>Добавление товара</h2>
          <Box>
            <Box className={classes.margin}>
              <TextField
                className={classes.input}
                mr={2}
                id="outlined-multiline-static"
                label="Название товара"
                multiline
                rows={1}
                value={name}
                onChange={handleAddName}
                variant="outlined"
              />
              <TextField
                className={classes.priceinp}
                mr={2}
                id="outlined-multiline-static"
                label="Введите стоимость"
                multiline
                rows={1}
                value={price}
                onChange={handleAddPrice}
                variant="outlined"
              />
              <Select
                id="demo-controlled-open-select"
                value={category}
                onChange={handleAddCategory}
                className={classes.inputcat}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="" disabled>
                  Категория
                </MenuItem>

                {categories.map((item) => (
                  <MenuItem key={item.value} value={item._id}>
                    {item.name}
                  </MenuItem>
                ))}
              </Select>
              <TextField
                className={classes.numinp}
                mr={2}
                id="outlined-multiline-static"
                label="Количество(шт)"
                multiline
                rows={1}
                value={number}
                onChange={handleAddNumber}
                variant="outlined"
              />

              <TextField
                className={classes.description}
                id="outlined-multiline-static"
                label="Введите описание"
                multiline
                rows={6}
                value={description}
                onChange={handleAddDescription}
                variant="outlined"
              />
              <Grid className={classes.root}>
                <input
                  accept="image/*"
                  className={classes.inputs}
                  id="contained-button-file"
                  type="file"
                  onChange={handleAddImage}
                />
                <label htmlFor="contained-button-file">
                  <Button color="primary" component="span">
                    ЗАГРУЗИТЬ ФОТОГРАФИЮ
                  </Button>
                </label>
                <input
                  accept="image/*"
                  className={classes.inputs}
                  id="icon-button-file"
                  type="file"
                  onChange={handleAddImage}
                />
                <label htmlFor="icon-button-file">
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />
                  </IconButton>
                </label>
              </Grid>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
            className={classes.btninput}
          >
            Добавить товар
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
export default ProfilePages;
