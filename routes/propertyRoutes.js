const express = require("express");

const Property = require("../models/propertyModel");
const { getProperties } = require("../controllers/propertyController");

const router = express.Router();

// GET all properties
router.get("/", getProperties);

// GET a single property
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single property" });
});

// POST a new property
router.post("/", async (req, res) => {
  const { title, propertyType, notes } = req.body;

  try {
    const property = await Property.create({ title, propertyType, notes });
    res.status(200).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE a property
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a property" });
});

// UPDATE a property
router.patch("/:id", (req, res) => {
  res.json({ msg: "UPDATE a property" });
});

module.exports = router;
