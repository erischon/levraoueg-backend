const express = require("express");

const Property = require("../models/propertyModel");
const {
  getAllProperty,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
} = require("../controllers/propertyController");

const router = express.Router();

// GET all property
router.get("/", getAllProperty);

// GET a single property
router.get("/:id", getProperty);

// POST a new property
router.post("/", createProperty);

// UPDATE a property
router.patch("/:id", updateProperty);

// DELETE a property
router.delete("/:id", deleteProperty);

module.exports = router;
