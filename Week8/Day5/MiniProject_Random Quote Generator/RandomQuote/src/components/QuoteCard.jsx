import React from "react";

const QuoteCard = ({ quote, author, displayColor, handleClick }) => {
  const randomColor = displayColor();
  const html = document.documentElement;
  html.style.backgroundColor = randomColor;

  return (
    <div style={{ backgroundColor: "white" }} id="card">
      <div
        className="fadeIn"
        key={Math.random()}
        style={{ color: randomColor }}
      >
        <h1 id="quote">"{quote}"</h1>
        <h5 id="author">-{author || "Unknown"}-</h5>
      </div>
      <button
        style={{ backgroundColor: randomColor }}
        id="newQuote"
        onClick={handleClick}
      >
        New quote
      </button>
    </div>
  );
};

export default QuoteCard;
