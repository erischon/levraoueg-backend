const mongoose = require("mongoose");

const Property = require("../models/propertyModel");

// get all property
const getAllProperty = async (req, res) => {
  const property = await Property.find({}).sort({ createdAt: -1 });

  res.status(200).json(property);
};

// get a single property
const getProperty = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such property" });
  }

  const property = await Property.findById(id);

  if (!property) {
    return res.status(404).json({ error: "No such property" });
  }

  res.status(200).json(property);
};

// create new property
const createProperty = async (req, res) => {
  const { title, propertyType, upc, images, rate } = req.body;

  // add doc to db
  try {
    const property = await Property.create({
      title,
      propertyType,
      upc,
      images,
      rate,
    });
    res.status(200).json(property);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a property
const updateProperty = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such property" });
  }

  const property = await Property.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!property) {
    return res.status(400).json({ error: "No such property" });
  }

  res.status(200).json(property);
};

// delete a property
const deleteProperty = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such property" });
  }

  const property = await Property.findOneAndDelete({ _id: id });

  if (!property) {
    return res.status(400).json({ error: "No such property" });
  }

  res.status(200).json(property);
};

module.exports = {
  getAllProperty,
  getProperty,
  createProperty,
  updateProperty,
  deleteProperty,
};
