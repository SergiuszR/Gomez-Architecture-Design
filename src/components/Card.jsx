import React from "react";
import "./Card.scss";

function Card({ building, project, year, description }) {
  return (
    <div className="description-card">
      <div className="description-card--top">
        <h2>{building}</h2>
        <p>{project}</p>
        <p>{year}</p>
      </div>
      <div className="description-card--bottom">
        <p className="project-card--bottom__desc">{description}</p>
        {/* <span>
          <p>more...</p>
        </span> */}
      </div>
    </div>
  );
}

export default Card;
