const express = require("express");
const router = express.Router();
const {
    Sauce,
    Items
} = require('../models')

router.get('/', async (req, res) => {
    const items = (await Items.findAll()) // node ./server/routes/products.js
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

module.exports = router