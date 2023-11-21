const express = require("express");
const router = express.Router();
const { Items } = require("../models");

// GET /item
router.get("/items", async (req, res, next) => {
  try {
    const items = await Items.findAll();
    res.status(200).send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
