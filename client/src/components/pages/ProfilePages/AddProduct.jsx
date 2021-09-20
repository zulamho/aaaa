import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Container, TextField, Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { addImage, addProduct } from "../../../redux/features/products";
import { loadCategories } from "../../../redux/features/categories";
import { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles, createStyles, withStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Header from "../HomePage/Header";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
      display: "flex",
    },
  },
  input: {
    width: "163px",
    height: "30px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
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
}))(InputBase);

const useStyles = makeStyles((theme) =>
  createStyles({
    description: {
      width: "1220px",
    },
  })
);

function AddProduct() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const categories = useSelector((state) => state.categories.items);
  console.log(categories);

  const handleAddName = (e) => {
    setName(e.target.value);
  };

  const handleAddPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleAddDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleAddNumber = (e) => {
    setNumber(e.target.value);
  };

  const handleAddImage = async (e) => {
    await dispatch(addImage(e));
  };

  const handleAddProduct = () => {
    dispatch(addProduct(name, price, description, category, number));
  };

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);
  console.log(name, price, description, category);
  //
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick({ vertical: "top", horizontal: "center" })}
      >
        Добавить товар
      </Button>
    </React.Fragment>
  );

  return (
    <Container>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        onClose={handleAddProduct}
        message="Товар добавлен"
        key={vertical + horizontal}
      />
      <h2>Добаление товара</h2>
      <Box>
        <Box display="flex" flexDirection="row" className={classes.margin}>
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

          <NativeSelect
            className={classes.input}
            mr={2}
            id="outlined-multiline-static"
            value={category}
            onChange={handleAddCategory}
            input={<BootstrapInput />}
          >
            <option aria-label="None" value="" />
            {categories.map((item) => (
              <option key={item.value} value={item._id}>
                {item.name}
              </option>
            ))}
          </NativeSelect>

          <TextField
            className={classes.input}
            mr={2}
            id="outlined-multiline-static"
            label="Введите стоимость"
            multiline
            rows={1}
            value={price}
            onChange={handleAddPrice}
            variant="outlined"
          />

          <TextField
            className={classes.input}
            mr={2}
            id="outlined-multiline-static"
            label="Количество(шт)"
            multiline
            rows={1}
            value={number}
            onChange={handleAddNumber}
            variant="outlined"
          />
          <Button
            className={classes.input}
            onChange={handleAddImage}
            variant="contained"
          >
            <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={handleAddImage}
            />
          </Button>
        </Box>
      </Box>

      <br />

      <br />
      <TextField
        className={classes.input}
        className={classes.description}
        id="outlined-multiline-static"
        label="Введите описание"
        multiline
        rows={6}
        value={description}
        onChange={handleAddDescription}
        variant="outlined"
      />
      <br />

      {/* <Button onClick={handleAddProduct} variant="contained" color="primary">
        Добавить
      </Button> */}
      {buttons}
    </Container>
  );
}
export default AddProduct;
//HHHHjghjhj

//kjhkjhjkoj
