import React, { useState } from "react";
import "./styles.css";

const sportDictionary = {
  "🏏": "Cricket",
  "⚽": "Soccer",
  "🏀": "Basketball",
  "🏑": "Hockey",
  "🏐": "Volleyball",
  "⚾": "Baseball"
};

var sportsWeKnow = Object.keys(sportDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function sportInputHandler(event) {
    var userInput = event.target.value;

    var meaning = sportDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }

    setMeaning(meaning);
  }

  function sportClickHandler(sport) {
    var userInput = sportDictionary[sport];

    setMeaning(userInput);
  }

  return (
    <div className="App">
      <h1>Balls in Sports</h1>
      <input onChange={sportInputHandler} placeholder="Select/ Enter" />
      <h2> {meaning} </h2>

      <h3> sports we know </h3>
      {sportsWeKnow.map(function (sport) {
        return (
          <span
            onClick={() => sportClickHandler(sport)}
            key={sport}
            style={{ fontSize: "2rem", padding: "0.5rem" }}
          >
            {sport}
          </span>
        );
      })}
    </div>
  );
}
