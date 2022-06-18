const express = require("express");

const router = express.Router();

// GET all properties
router.get("/", (req, res) => {
  res.json({ msg: "GET all properties" });
});

// GET a single property
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single property" });
});

// POST a new property
router.post("/", (req, res) => {
  res.json({ msg: "POST a new property" });
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
