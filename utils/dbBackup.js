const mongoose = require("mongoose");
const fs = require("fs");
const dotenv = require("dotenv").config();

const Property = require("../models/propertyModel");

const BACKUP_PATH = "./archive/";

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedProperty = async () => {
  try {
    const property = await Property.find({});
    const jsonContent = JSON.stringify(property);

    fs.writeFileSync(
      `${BACKUP_PATH}backup.json`,
      jsonContent,
      { encoding: "utf8", flag: "w" },
      (err) => {
        if (err) {
          console.log(
            "An error occured while writing JSON Object to File: ",
            err
          );
        } else {
          console.log("JSON file has been saved.");
        }
      }
    );

    process.exit();
  } catch (error) {
    console.log(error.message);

    process.exit();
  }
};

seedProperty();
