import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";

const Location = () => {
  const [city, setCity] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Initial data fetch when the component mounts
    searchDatabase();
  }, []);
  
  
  const handleLocationChange = (e) => {
    setCity(e.target.value);
    // console.log("Onclick value:", e.target.value);
  };

  const searchDatabase = async () => {
    // console.log("search string", city);
    try {
      const response = await axios.get("/api/search-location", {
        params: { city }, // Send city as a query parameter
      });
      setResults(response.data);
      // console.log('search results', response.data);
    } catch (error) {
      console.error("Error searching database:", error);
    }
  };

  return (
    <div>
      <label htmlFor="city"></label>
      <select
        id="city"
        name="city"
        onChange={handleLocationChange}
        value={city}
      >
        <option value="">Select a Location</option>
        <option value="Boston">Boston</option>
        <option value="Cambridge">Cambridge</option>
        <option value="Dorchester">Dorchester</option>
        <option value="Somerville">Somerville</option>
        <option value="Medford">Medford</option>
        <option value="Arlington">Arlington</option>
        <option value="Watertown">Watertown</option>
      </select>
      <button onClick={searchDatabase}>Search</button>
      <div className="card-list">
        {results.map((result, index) => (
          <div key={index}>
            <Card
              key={result._id}
              name={result.name}
              city={result.city}
              price={result.price}
              deals={result.deals}
              altDeals={result.altDeals}
              altAltDeals={result.altAltDeals}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Location;
