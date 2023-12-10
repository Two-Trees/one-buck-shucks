
import React from "react";
import Review from "./Review";

const Page = ({ onClick, id, name, website, street, city, state, zip, days, search, price, deals, altDeals, altAltDeals }) => {
  
  return (
    <div className="page" onClick={onClick} key={id}>
      <h1>{name}</h1>
      <h2>{street} {city} {state} {zip}</h2>
      <h3>{days}</h3>
      <h3>{price}</h3>
      <p>{deals}</p>
      <p>{altDeals}</p>
      <p>{altAltDeals}</p>
      <a href={website}>website</a>
      <button className="custom-button">directions</button>
      <Review />
    </div>
  );
};

export default Page;