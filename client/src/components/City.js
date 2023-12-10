import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import axios from "axios";

const City = () => {
  const [cardData, setCardData] = useState([]);

  let navigate = useNavigate()

  const handleclick = () => {
    navigate("/")
  }

  useEffect(() => {
    // Fetch data from your backend server
    const mongoString = process.env.MONGO_STRING;
    axios
      .get("http://localhost:4000/location", {
        headers: {
          Authorization: `Bearer ${mongoString}`,
        },
      })
      .then((res) => setCardData(res.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(cardData);

  return (
    <div className="container">
      <div className="App">
        <div className="shucks">
          <h1>One Buck Shucks</h1>
        </div>
        <button className="custom-button" onClick={handleclick}>
          Back to Calendar
        </button>
        <div className="card-list">
          {Object.keys(cardData).map((city, index) => (
            <div key={index} className="day-container">
              <hr></hr>
              <h1>{city}</h1>
              <div className="card-list">
                {cardData[city].map((card, index) => (
                  <Card
                    key={card._id}
                    name={card.name}
                    city={card.city}
                    price={card.price}
                    deals={card.deals}
                    altDeals={card.altDeals}
                    altAltDeals={card.altAltDeals}
                    website={card.website}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default City;
