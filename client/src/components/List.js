import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const List = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend server
    const mongoString = process.env.MONGO_STRING;
    axios
      .get("http://localhost:4000/api/cards", {
        headers: {
          Authorization: `Bearer ${mongoString}`,
        },
      })
      .then((res) => setCardData(res.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // console.log(cardData);

  return (
    <div className="card-list">
      {cardData.map((card, index) => (
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
  );
};

export default List;