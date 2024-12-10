// import express
const express = require("express");
// create an istance of Router
const router = express.Router();

// import functions from controller
const {
    index,
    show,
    store,
    update,
    modify,
    destroy,
} = require("../controllers/exampleController");

// routes - RESTful APIs
router.get("/", index);
router.get("/:id", show);
router.post("/", store);
router.put("/:id", update);
router.patch("/:id", modify);
router.delete("/:id", destroy);

module.exports = router;
