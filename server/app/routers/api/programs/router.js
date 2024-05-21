const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import program-related actions
const { browse } = require("../../../controllers/programActions");

// Route to get a list of programs
router.get("/", browse);

/* ************************************************************************* */

module.exports = router;
