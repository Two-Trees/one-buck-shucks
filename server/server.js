const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config()
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

mongoose.connection.once("open", () => {
  console.log("conneted to mongodb");
});

// Define schema
const cardSchema = new mongoose.Schema({
  name: String,
  website: String,
  street: String,
  city: String,
  state: String,
  zip: Number,
  days: String,
  search: String,
  price: String,
  deals: String,
  altDeals: String,
  altAltDeals: String,
});

// Create a model based on the schema
const Card = mongoose.model("Card", cardSchema);

// Middleware to parse JSON in requests
app.use(express.json());

app.get("/api/cards", async (req, res) => {
  try {
    const cards = await Card.find({});
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/api/search-day", async (req, res) => {
  const search = req.query.search;
  try {
    const results = await Card.find({ search });
    res.json(results);
    console.log(results)
  } catch (error) {
    console.error("Error searching MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/search-location", async (req, res) => {
  const location = req.query.city;
  console.log(location)
  try {
    const results = await Card.find({city: location});
    res.json(results);
    console.log(results)
  } catch (error) {
    console.error("Error searching MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(4000, () => {
  console.log("listening on port 4000");
});
