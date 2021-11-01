const { Router } = require("express"); 
const { productController } = require("../controllers/product.controller"); 
const authMiddleware = require("../models/middlewares/auth.middleware"); 
 
const router = Router(); 
 
router.post("/product", authMiddleware, productController.addProduct); 
router.get("/product", productController.getProducts); 
router.get("/product/category/:id", productController.getProductsCategory); 
router.patch("/product/:id", productController.editProduct); 
router.delete("/product/:id", authMiddleware, productController.deleteProduct); 
router.get("/product/:id", productController.getProductOne); 
router.post("/product/upload", productController.addImage); 
 
module.exports = router;