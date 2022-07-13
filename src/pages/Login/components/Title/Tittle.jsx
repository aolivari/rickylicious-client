import React from "react";
import "./Title.css";

function Tittle({ text }) {
  return (
    <div className="title-container">
      <label className="title-label">{text}</label>
    </div>
  );
}

export default Tittle;
