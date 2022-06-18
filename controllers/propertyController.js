const Property = require("../models/propertyModel");

// get all properties
// get all workouts
const getProperties = async (req, res) => {
  const properties = await Property.find({}).sort({ createdAt: -1 });

  res.status(200).json(properties);
};

// get a single property
// create new property
// delete a property
// update a property

module.exports = {
  getProperties,
};
