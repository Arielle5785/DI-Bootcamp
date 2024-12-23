// components/LanguageCard.jsx
import React from "react";

function LanguageCard({ language, onVote }) {
  return (
    <div className="language-card">
      <span>{language.votes}</span>
      <span>{language.name}</span>
      <button onClick={onVote}>Click Here</button>
    </div>
  );
}

export default LanguageCard;
