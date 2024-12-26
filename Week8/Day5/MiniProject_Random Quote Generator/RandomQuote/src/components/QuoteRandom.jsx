import React, { useState, useEffect } from "react";
import QuoteData from "./QuoteData";
import QuoteCard from "./QuoteCard";

const QuoteRandom = () => {
  const [currentQuote, setCurrentQuote] = useState(QuoteData[0]);
  const [usedQuotes, setUsedQuotes] = useState([QuoteData[0]]);
  const [randomColor, setRandomColor] = useState("rgb(100, 100, 100)");

  const generateRandomColor = () => {
    return `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
  };

  const handleClick = () => {
    // Ensure a new random quote
    let nextQuote;
    const remainingQuotes = QuoteData.filter(
      (quote) => !usedQuotes.includes(quote)
    );
    if (remainingQuotes.length === 0) {
      // Reset the used quotes to allow repetition
      nextQuote = QuoteData[0];
      setUsedQuotes([QuoteData[0]]);
    } else {
      nextQuote =
        remainingQuotes[Math.floor(Math.random() * remainingQuotes.length)];
      setUsedQuotes([...usedQuotes, nextQuote]);
    }

    setCurrentQuote(nextQuote);
    setRandomColor(generateRandomColor());
  };

  useEffect(() => {
    setRandomColor(generateRandomColor());
  }, []);

  return (
    <div>
      <QuoteCard
        quote={currentQuote.quote}
        author={currentQuote.author}
        displayColor={() => randomColor}
        handleClick={handleClick}
      />
    </div>
  );
};

export default QuoteRandom;
