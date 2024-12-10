// imports
const { examples } = require("../models/examples"); //data

// controller - CRUD operations
// read - index
const index = (req, res) => {
    res.json(examples);
};

// read - show
const show = (req, res) => {
    const idTarget = req.params.id;
    const exampleTarget = examples.find((example) => example.id == idTarget);
    if (!exampleTarget) return res.sendStatus(404);
    res.json(exampleTarget);
};

// create - store
const store = (req, res) => {};

// update - update
const update = (req, res) => {};

// update - modify
const modify = (req, res) => {};

// delete - destroy
const destroy = (req, res) => {};

module.exports = { index, show, store, update, modify, destroy };
