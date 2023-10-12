import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Day = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Initial data fetch when the component mounts
    searchDatabase();
  }, []);


  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    console.log("Onclick value: ", e.target.value);
    console.log(selectedDay);
  };


  const searchDatabase = async () => {
    try {
      const response = await axios.get("/api/search-day", {
        params: { search: selectedDay }, // Send day as a query parameter
      });
      setResults(response.data);
      console.log(results);
    } catch (error) {
      console.error("Error searching database:", error);
    }
  };

  return (
    <div>
      <label htmlFor="day"></label>
      <select
        id="day"
        name="day"
        onChange={handleDayChange}
        value={selectedDay}
      >
        <option value="">Select a day</option>
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="thursday">Thursday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
        <option value="sunday">Sunday</option>
      </select>
      <button onClick={searchDatabase}>Search</button>
      <div className="card-list">
      {results.map((card, index) => (
        <div key={index}>
          <Card
            key={card._id}
            name={card.name}
            city={card.city}
            price={card.price}
            deals={card.deals}
            altDeals={card.altDeals}
            altAltDeals={card.altAltDeals}
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Day;
