import React, { useState } from "react";
import List from "./components/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import City from "./components/City";
import Page from "./components/Page";
import "./styles/index.css";

function App() {
  const [card, setCard] = useState(null);
  const handleCardClick = (card) => {
    console.log(card);
    setCard(card);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/location" element={<City />} />
          <Route
            path="/"
            element={<List onCardClick={handleCardClick} />}
          />
          {card && (
            <Route
              path="/page"
              element={
                <Page
                  id={card.id}
                  name={card.name}
                  website={card.website}
                  street={card.street}
                  city={card.city}
                  state={card.state}
                  zip={card.zip}
                  days={card.days}
                  price={card.price}
                  deals={card.deals}
                  altDeals={card.altDeals}
                />
              }
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// id, name, website, street, city, state, zip, days, search, price, deals, altDeals, altAltDeals