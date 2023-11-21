const express = require("express");
const router = express.Router();
const { Sauce } = require("../models");

// GET /sauce
router.get("/sauces", async (req, res, next) => {
  try {
    const sauces = await Sauce.findAll();
    res.status.send(sauces);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
