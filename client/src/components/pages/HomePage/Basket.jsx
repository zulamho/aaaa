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
  import Paper from "@material-ui/core/Paper"; 
  import Tabs from "@material-ui/core/Tabs"; 
  import Tab from "@material-ui/core/Tab"; 
   
  const useStyles = makeStyles((theme) => 
    createStyles({ 
      card: { 
        backgroundColor: "gainsboro", 
        padding: "0", 
      }, 
    }) 
  ); 
   
  function Basket(props) { 
    const dispatch = useDispatch(); 
    const classes = useStyles(); 
    const { id } = useParams(); 
    const baskets = useSelector((state) => state.application.basket); 
    console.log(baskets); 
   
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
   
        <Grid> 
          <hr /> 
          <Paper className={classes.root}> 
            <Tab label="Товары" /> 
            <Tab label="Количество (шт)" /> 
            <Tab label="Осталось (шт)" /> 
          </Paper> 
        </Grid> 
   
        {baskets.map((item) => { 
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
                  <Link to="/editproduct">Изменить</Link> 
   
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
        })} 
      </> 
    ); 
  } 
   
  export default Basket;