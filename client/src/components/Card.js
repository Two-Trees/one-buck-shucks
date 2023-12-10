import React from 'react';

const Card = ({ onClick, id, name, website, street, city, state, zip, days, search, price, deals, altDeals, altAltDeals }) => {
  
  return (
    <div className="card" onClick={onClick} key={id}>
      <h2>{name}</h2>
      <h3>{city}</h3>
      <h3>{price}</h3>
      <p>{deals}</p>
      <p>{altDeals}</p>
      <p>{altAltDeals}</p>
      <a href={website}>website</a>
      <button className="custom-button">directions</button>
    </div>
  );
};

export default Card;