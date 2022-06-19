const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const Property = require("../models/propertyModel");
const property = require("../data/property.json");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedProperty = async () => {
  try {
    await Property.deleteMany();
    console.log("Property are deleted");

    await Property.insertMany(property);
    console.log("All property are added");

    process.exit();
  } catch (error) {
    console.log(error.message);

    process.exit();
  }
};

seedProperty();
