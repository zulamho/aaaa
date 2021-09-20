const { Router } = require("express");
const { cartController } = require("../controllers/cart.controller");

const router = Router();

router.get("/cart", cartController.getCart);
router.post("/cart", cartController.createCart);
router.delete("/cart/:id", cartController.deleteCart);

module.exports = router;
