// Define an endpoint to insert an array of JSON objects
app.post("/insertData", async (req, res) => {
  try {
    // Assuming the request body contains an array of JSON objects
    const documents = req.body;
    // Insert the documents into the collection
    const result = await Card.insertMany(documents);

    res.json({
      message: `${result.length} documents inserted into the collection.`,
    });
  } catch (error) {
    console.error(error);
    res

  }})

// axios
//   .post("http://localhost:4000/insertData", documents)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   }); 
