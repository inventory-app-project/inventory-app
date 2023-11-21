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

//Get a specific item by ID
router.get("/items/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findByPk(id);

    if (item) {
      res.json(item);
    } else {
      res.status(404).send("Item not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST a new item
router.post("/items", async (req, res) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
