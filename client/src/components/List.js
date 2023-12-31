import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";


const List = ({onCardClick}) => {
  const [cardData, setCardData] = useState([]);
  let navigate = useNavigate()
  
  useEffect(() => {
    // Fetch data from your backend server
    const mongoString = process.env.MONGO_STRING;
    axios
      .get("http://localhost:4000/", {
        headers: {
          Authorization: `Bearer ${mongoString}`,
        },
      })
      .then((res) => setCardData(res.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleclick = () => {
    navigate("/location")
  }

  return (
    <div className="container">
      {onCardClick && (
      <div className="App">
        <div className="shucks">
          <h1>One Buck Shucks</h1>
        </div>
        <button className="custom-button" onClick={handleclick}>
          Browse by City
        </button>
        <div className="card-list">
          {Object.keys(cardData).map((day, index) => (
            <div key={index} className="day-container">
              <hr></hr>
              <h1>{day}</h1>
              <div className="card-list">
                {cardData[day].map((card, index) => (
                  <Card
                    onClick={()=> onCardClick(card)}
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
      )}
    </div>
  );
};

export default List;
