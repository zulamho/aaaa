const { Router } = require("express");

const router = Router();

router.use(require("./product.route"));
router.use(require("./category.route"));
router.use(require("./user.route"));
router.use(require("./review.route"));

module.exports = router;
