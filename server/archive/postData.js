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

//   }})

// axios
//   .post("http://localhost:4000/insertData", documents)
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   }); 



  // useEffect(() => {
    // Fetch data from your backend server
  //   const mongoString = process.env.MONGO_STRING;
  //   axios
  //     .get("http://localhost:4000/api/cards", {
  //       headers: {
  //         Authorization: `Bearer ${mongoString}`,
  //       },
  //     })
  //     .then((res) => setResults(res.data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  // app.post("/api/search-day", async (req, res) => {
  //   const { day } = req.body;
  //   const query = {};
  //   query[day] = true;
  //   try {
  //     const results = await Card.find({ query });
  //     res.json(results);
  //   } catch (error) {
  //     console.error("Error searching MongoDB:", error);
  //     res.status(500).json({ error: "Internal server error" });
  //   }
  // });
  
  // function getString(obj) {
  //   var keys = Object.keys(obj);
  //   var keyString = keys.toString;
  //   console.log(keyString)
  //   return keyString;
  // }