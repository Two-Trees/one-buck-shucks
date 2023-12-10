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
  search: [String],
  price: String,
  deals: String,
  altDeals: String,
  altAltDeals: String,
});

// Create a model based on the schema
const Card = mongoose.model("Card", cardSchema);

// Middleware to parse JSON in requests
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const cards = await Card.find({});
    const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const groupedCards = {};

    daysOfWeek.forEach((day) => {
      groupedCards[day] = cards.filter((card) => card.search.includes(day));
    });
    console.log(groupedCards)
    res.json(groupedCards);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/location", async (req, res) => {
  try {
    const cards = await Card.find({})
    const locations = ["Arlington","Boston", "Braintree", "Cambridge", "Dorchester", "Newburyport", "Medford", "Somerville", "Watertown"]
    const groupedCards = {}
    locations.forEach((city) => {
      groupedCards[city] = cards.filter((card) => card.city.includes(city))
    })
      console.log(groupedCards)
      res.json(groupedCards);
    } catch (error) {
      res.status(500).json({ error: "Location request server error"})
     }
})

app.get("/page", async (req, res) => {
  const page = req.params.name; 
  try {
    const results = await Card.find({ page });
    res.json(results)
    console.log("results", results)
  } catch (error) {
    console.error("Error searching MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
})

app.listen(4000, () => {
  console.log("listening on port 4000");
});
