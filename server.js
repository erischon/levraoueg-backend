const express = require("express");
require("dotenv").config();

const propertyRoutes = require("./routes/propertyRoutes");

// express app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/property/", propertyRoutes);

// Listen for requests
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
