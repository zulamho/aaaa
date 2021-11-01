const { Router } = require("express");
const { userController } = require("../controllers/user.controller");

const router = Router();

router.post("/user", userController.registerUser);
router.post("/login", userController.login);
router.get("/user", userController.getUser);
router.patch("/user/:id", userController.editUser);
router.delete("/user/:id", userController.deleteUser);
router.get("/user/:id", userController.getUserById);

module.exports = router;
