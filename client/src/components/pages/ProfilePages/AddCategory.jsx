// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import { Button, Container, TextField } from "@material-ui/core";
// import { addImage, addProduct } from "../../../redux/features/products";
// import { addCategory } from "../../../redux/features/categories";

// function AddCategory() {
//   const dispatch = useDispatch();

//   const [name, setName] = useState("");
  

//   const handleAddName = (e) => {
//     setName(e.target.value);
//   };



//   const handleAddProduct = () => {
//     dispatch(addCategory(name));
//   };

//   return (
//     <Container>
//       <h3>Дабавить категорию</h3>
//       <TextField
//         id="outlined-multiline-static"
//         label="Название категории"
//         multiline
//         rows={1}
//         value={name}
//         onChange={handleAddName}
//         variant="outlined"
//       />
      

//       <Button onClick={handleAddProduct} variant="contained" color="primary">
//         Добавить
//       </Button>
//       <div>
       
//       </div>
//     </Container>
//   );
// }
// export default AddCategory;
