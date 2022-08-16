import React, { useState } from "react";
import "./App.css";

function Card({ items }) {
  const { id, college, location, info, img } = items;
  const [card, setCard] = useState(true);
  if (card) {
    return (
      <article className="card">
        <div className="title">
          <h2 className="college">{college}</h2>
          <h4 className="location">{location}</h4>
        </div>
        <div className="image">
          <img src={img} alt={college} />
        </div>
        <button className="btn" onClick={() => setCard(false)}>
          Learn More
        </button>
      </article>
    );
  }
  if (card === false) {
    return (
      <main>
        <article className="popup">
          <div className="content">
            <div className="title-popup">
              <h2 className="college-popup">{college}</h2>
              <h4 className="location-popup">{location}</h4>
            </div>

            <div className="image-popup">
              <img src={img} alt={college} />
            </div>
            <p className="info">{info}</p>
            <button className="btn btn-popup" onClick={() => setCard(true)}>
              Close
            </button>
          </div>
        </article>
      </main>
    );
  }
}

export default Card;
