const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
require("dotenv").config()
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_STRING),
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

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
  monday: Boolean,
  tuesday: Boolean,
  wednesday: Boolean,
  thursday: Boolean,
  friday: Boolean,
  saturday: Boolean,
  sunday: Boolean,
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

app.post("/api/search-day", async (req, res) => {
  const { day } = req.body;
  const query = {};
  query[day] = true;
  try {
    const results = await Card.find({ query });
    res.json(results);
  } catch (error) {
    console.error("Error searching MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

function getString(obj) {
  const keys = Object.keys(obj);
  const keyString = keys.toString;
  console.log(keyString)
  return keyString;
}

app.post("/api/search-location", async (req, res) => {
  const location = req.body;
  var str = ''
  const keys = Object.keys(location)
  str = keys.toString

  console.log("post req", location);
  try {
    const results = await Card.find({ location });
    res.json(results);
    // console.log(results)
  } catch (error) {
    console.error("Error searching MongoDB:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Define an endpoint to insert an array of JSON objects
// app.post("/insertData", async (req, res) => {
//   try {
//     // Assuming the request body contains an array of JSON objects
//     const documents = req.body;
//     // Insert the documents into the collection
//     const result = await Card.insertMany(documents);

//     res.json({
//       message: `${result.length} documents inserted into the collection.`,
//     });
//   } catch (error) {
//     console.error(error);
//     res

// axios
//   .post("http://localhost:4000/insertData", documents)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

app.listen(4000, () => {
  console.log("listening on port 4000");
});
