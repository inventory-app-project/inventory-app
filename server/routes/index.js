const express = require("express");
const router = express.Router();

// different model routers
router.use("/products", require("./products.js"))

module.exports = router;