const express = require("express");
const router = express.Router();
const {
    Sauce,
    Items
} = require('../models')

router.get('/products', async (req, res) => { // Fetch all
    const items = (await Items.findAll())
    let ret = {
        "items": [],
        "sauces": []
    };
    for (let item of items) {
        ret.items.push(item.dataValues);
    }

    const sauces = (await Sauce.findAll())
    for (let sauce of sauces) {
        ret.sauces.push(sauce.dataValues);
    }

    res.status(200).json(ret)
})

router.get('/products/:id', async (req, res) => {
    const id = Number(req.params.id);
    const items = (await Items.findAll())
    let ret = {
        "items": [],
        "sauces": []
    };
    for (let item of items) {
        ret.items.push(item.dataValues);
    }

    const sauces = (await Sauce.findAll())
    for (let sauce of sauces) {
        ret.sauces.push(sauce.dataValues);
    }

    let selectedItem = ret.items.find(e => e.id === id);

    if (!selectedItem) {
        res.status(404).send({
            "Status Code": 404,
            "Error": `An item with the ID of ${id} does not exist in the current DB!`
        })
    } else {
        res.status(200).json(selectedItem);
    }
})

router.get("/items", async (req, res, next) => {
    const items = await Items.findAll();
    res.status(200).send(items);
});

router.get("/sauces", async (req, res, next) => {
    const sauces = await Sauce.findAll();
    res.status(200).send(sauces);
});

module.exports = router