const express = require("express");
const router = express.Router();
const { Sauce, Items } = require("../models");

router.get("/", async (req, res) => {
  const items = await Items.findAll(); // node ./server/routes/products.js
  let ret = {
    items: [],
    sauces: [],
  };
  for (let item of items) {
    ret.items.push(item.dataValues);
  }

  const sauces = await Sauce.findAll();
  for (let sauce of sauces) {
    ret.sauces.push(sauce.dataValues);
  }

  res.status(200).json(ret);
});

router.get("/products/:id", async (req, res) => {
  const ret = await constructArray();
  let selectedItem = ret.items.find((e) => e.id === id);

  if (!selectedItem) {
    res.status(404).send({
      "Status Code": 404,
      Error: `An item with the ID of ${id} does not exist in the current DB!`,
    });
  } else {
    res.status(200).json(selectedItem);
  }
});

router.get("/items", async (req, res, next) => {
  const items = await Items.findAll();
  res.status(200).send(items);
});

router.get("/sauces", async (req, res, next) => {
  const sauces = await Sauce.findAll();
  res.status(200).send(sauces);
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
