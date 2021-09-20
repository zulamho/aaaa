// import Grid from "@material-ui/core/Grid";
// import { makeStyles, createStyles } from "@material-ui/core/styles";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchCategories, removeCategory } from "../../../redux/features/categories";
// import { NavLink } from "react-router-dom";
// import {  withStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";
// import Select from "@material-ui/core/Select";
// import NativeSelect from "@material-ui/core/NativeSelect";
// import InputBase from "@material-ui/core/InputBase";


// const BootstrapInput = withStyles((theme) => ({
//     root: {
//       "label + &": {
//         marginTop: theme.spacing(3)
//       }
//     },
//     input: {
//       borderRadius: 4,
//       position: "relative",
//       backgroundColor: theme.palette.background.paper,
//       border: "1px solid #ced4da",
//       fontSize: 16,
//       padding: "10px 26px 10px 12px",
//       transition: theme.transitions.create(["border-color", "box-shadow"]),
//       // Use the system font instead of the default Roboto font.
//       fontFamily: [
//         "-apple-system",
//         "BlinkMacSystemFont",
//         '"Segoe UI"',
//         "Roboto",
//         '"Helvetica Neue"',
//         "Arial",
//         "sans-serif",
//         '"Apple Color Emoji"',
//         '"Segoe UI Emoji"',
//         '"Segoe UI Symbol"'
//       ].join(","),
//       "&:focus": {
//         borderRadius: 4,
//         borderColor: "#80bdff",
//         boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
//       }
//     }
//   }))(InputBase);

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     card: {
//       backgroundColor: "gainsboro",
//       padding: "0",
//     },
//     margin: {
//         margin: theme.spacing(1)
//       }
//   })
// );




// function Test(props) {
//   const dispatch = useDispatch();
//   const classes = useStyles();
//   const categories = useSelector((state) => state.products.product);
//   console.log(categories)


//   const handleDelete = (id) => {
//     dispatch(removeCategory(id));
//   };


// //   const [age, setAge] = React.useState("вв");

//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

  
//   return (
      
//     <div>
//         <div>
//       <FormControl className={classes.margin}>
//         <InputLabel htmlFor="demo-customized-textbox">Название</InputLabel>
//         <BootstrapInput id="demo-customized-textbox" />
//       </FormControl>

//       <FormControl className={classes.margin}>
//         <InputLabel htmlFor="demo-customized-select-native">Категории</InputLabel>
//         <NativeSelect
//           id="demo-customized-select-native"
//         //   value={age}
//           onChange={handleChange}
//           input={<BootstrapInput />}
//         >
//            {categories?.map((item) => {
//         return (
//             <option value={10}>{item.name}</option>
//         );
//       })}
//         </NativeSelect>
//       </FormControl>
//     </div>
     
//     </div>
//   );
// }

// export default Test;




// // import React from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { useEffect } from "react";
// // import { useState } from "react";
// // import { Button, Container, TextField } from "@material-ui/core";
// // import { addImage, addProduct } from "../../../redux/features/products";
// // import Header from "../HomePage/Header";
// // import { fetchCategories, removeCategory } from "../../../redux/features/categories";
// // import { NavLink } from "react-router-dom";
// // import {  withStyles } from "@material-ui/core/styles";
// // import InputLabel from "@material-ui/core/InputLabel";
// // import MenuItem from "@material-ui/core/MenuItem";
// // import FormControl from "@material-ui/core/FormControl";
// // import Select from "@material-ui/core/Select";
// // import NativeSelect from "@material-ui/core/NativeSelect";
// // import InputBase from "@material-ui/core/InputBase";
// // import { makeStyles, createStyles } from "@material-ui/core/styles";
// // import { fetchProductss } from "../../../redux/features/cat";



// // const BootstrapInput = withStyles((theme) => ({
// //   root: {
// //     "label + &": {
// //       marginTop: theme.spacing(3)
// //     }
// //   },
// //   input: {
// //     borderRadius: 4,
// //     position: "relative",
// //     backgroundColor: theme.palette.background.paper,
// //     border: "1px solid #ced4da",
// //     fontSize: 16,
// //     padding: "10px 26px 10px 12px",
// //     transition: theme.transitions.create(["border-color", "box-shadow"]),
// //     // Use the system font instead of the default Roboto font.
// //     fontFamily: [
// //       "-apple-system",
// //       "BlinkMacSystemFont",
// //       '"Segoe UI"',
// //       "Roboto",
// //       '"Helvetica Neue"',
// //       "Arial",
// //       "sans-serif",
// //       '"Apple Color Emoji"',
// //       '"Segoe UI Emoji"',
// //       '"Segoe UI Symbol"'
// //     ].join(","),
// //     "&:focus": {
// //       borderRadius: 4,
// //       borderColor: "#80bdff",
// //       boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
// //     }
// //   }
// // }))(InputBase);

// // const useStyles = makeStyles((theme) =>
// // createStyles({
// //   card: {
// //     backgroundColor: "gainsboro",
// //     padding: "0",
// //   },
// //   margin: {
// //       margin: theme.spacing(1)
// //     }
// // })
// // );





// // function AddProduct() {
// //   const dispatch = useDispatch();
// //   const classes = useStyles();

// //   const [name, setName] = useState("");
// //   const [price, setPrice] = useState("");
// //   const [category, setCategory] = useState("");
// //   const categories = useSelector((state) => state.products.produc);

// //   useEffect(() => {
// //     dispatch(fetchProductss());
// //   }, [dispatch]);

// //   const handleAddName = (e) => {
// //     setName(e.target.value);
// //   };
// //   const handleAddCategory = (e) =>{
// //     setCategory(e.target.value);
// //   }

// //   const handleAddPrice = (e) => {
// //     setPrice(e.target.value);
// //   };

// //   const handleAddImage = async (e) => {
// //     await dispatch(addImage(e));
// //   };

// //   const handleAddProduct = () => {
// //     dispatch(addProduct(name, price,category));
// //   };

// //   const handleChange = (event) => {
// //     setAge(event.target.value);
// //   };



// //   return (
// //     <Container>
      
// //       <Header />
// //       <FormControl className={classes.margin}>
// //         <InputLabel htmlFor="demo-customized-textbox">Название</InputLabel>
// //         <BootstrapInput id="demo-customized-textbox" />
// //       </FormControl>

// //       <FormControl className={classes.margin}>
// //         <InputLabel htmlFor="demo-customized-select-native">Категории</InputLabel>
// //         <NativeSelect
// //           id="demo-customized-select-native"
// //         //   value={age}
// //           onChange={handleChange}
// //           input={<BootstrapInput />}
// //         >
// //            {categories?.map((item) => {
// //         return (
// //             <option value={10}>{item.name}</option>
// //         );
// //       })}
// //         </NativeSelect>
// //       </FormControl>
// //       <TextField
// //         id="outlined-multiline-static"
// //         label="Введите имя"
// //         multiline
// //         rows={1}
// //         value={name}
// //         onChange={handleAddName}
// //         variant="outlined"
// //       />
// //       <TextField
// //         id="outlined-multiline-static"
// //         label="Выберите категорию"
// //         multiline
// //         rows={1}
// //         value={category}
// //         onChange={handleAddCategory}
// //         variant="outlined"
// //       />
// //       <TextField
// //         id="outlined-multiline-static"
// //         label="Введите стоимость"
// //         multiline
// //         rows={1}
// //         value={price}
// //         onChange={handleAddPrice}
// //         variant="outlined"
// //       />

// //       <Button onClick={handleAddProduct} variant="contained" color="primary">
// //         Добавить
// //       </Button>
// //       <div>
// //         <Button onChange={handleAddImage} variant="contained">
// //           <input
// //             accept="image/*"
// //             id="contained-button-file"
// //             multiple
// //             type="file"
// //             onChange={handleAddImage}
// //           />
// //         </Button>
// //       </div>
// //     </Container>
// //   );
// // }
// // export default AddProduct;
