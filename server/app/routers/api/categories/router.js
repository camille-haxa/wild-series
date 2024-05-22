const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// import category related actions
const { browse, read } = require("../../../controllers/categoryActions");

// Route to get a list of categories
router.get("/", browse);

// Route to get a category by id
router.get("/:id", read);

/* ************************************************************************* */

module.exports = router;
