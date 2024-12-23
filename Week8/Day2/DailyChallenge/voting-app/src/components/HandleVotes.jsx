import React, { useState } from "react";
import LanguageCard from './LanguageCard.jsx'

function HandleVotes (){
const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const Vote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
    };
    return (
        <>
            <div className="app">
            <h1>Vote Your Language!</h1>
                <div className="language-list">
                    {languages.map((language, index) => (
                    <LanguageCard
                        key={index}
                        language={language}
                        onVote={() => Vote(index)}
                    />
                    ))}
                </div>
            </div>
        </>
      );
}
    
export default HandleVotes