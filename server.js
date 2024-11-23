const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/api/products", productRoute);


//Node-API es la collection (lo que conozco como la db) y eso va a tener sus tablas con sus registros(documentos)
mongoose
  .connect(
    "mongodb+srv://theodore0510:Angel1t0@backenddb.kugmp.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("MongoDB Connected...");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch(() => console.log("Connection Failed"));
