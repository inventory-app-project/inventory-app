const express = require("express");
const router = express.Router();

// different model routers
router.use("/sauces", require("./sauces.js"));
router.use("/items", require("./items.js"));
router.use("/products.json", require("./products.js"))

module.exports = router;
