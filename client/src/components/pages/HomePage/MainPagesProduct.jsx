import {
  CardActionArea,
  CardContent,
  Typography,
  Box,
  Grid,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  fetchProducts,
  removeProducts,
} from "../../../redux/features/products";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Rating from "@material-ui/lab/Rating";
import Header from "./Header";
import EditProduct from "../ProfilePages/EditProduct";

const useStyles = makeStyles((theme) =>
  createStyles({
    card: {
      backgroundColor: "gainsboro",
      padding: "0",
    },
  })
);

function MainPagesProduct(props) {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  const product = useSelector((state) => {
    return state.products.product;
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeProducts(id));
  };

  //   /*{`/${item.pathImages}`}*/ для изобр
  return (
    <>
      <Header />
      <br />
      {product.map((item) => {
        if (item._id === id) {
          return (
            <CardActionArea>
              <div>
                <CardContent>
                  <img src={`/${item.pathImages}`} alt="" />
                  <br />

                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  {item.price}
                  <ShoppingCartOutlinedIcon />
                  <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating name="simple-controlled" />
                  </Box>
                  <Link to={`/edit/${item._id}`}>Изменить</Link>

                  {/* {item.category} */}
                  <Grid>
                    <NavLink to={`/product/${item._id}`}></NavLink>

                    <button
                      onClick={() => {
                        handleDelete(item._id);
                      }}
                    >
                      Удалить
                    </button>
                  </Grid>
                </CardContent>
              </div>
            </CardActionArea>
          );
        }
      })}
    </>
  );
}

export default MainPagesProduct;
