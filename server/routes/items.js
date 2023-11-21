const express = require("express");
const router = express.Router();
const { Items } = require("../models/items");

// GET /item
router.get("/items", async (req, res, next) => {
  try {
    const items = await Items.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
