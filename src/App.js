import React, { useState } from "react";
import "./App.css";
import DisplayQuotes from "./components/DisplayQuotes";
import axios from "axios";

const sampleQuotes = {
  quote: "Shut up, brain. I got friends now. I don't need you anymore.",
  character: "Lisa Simpson",
  image:
    "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FLisaSimpson.png?1497567512083",
  characterDirection: "Right",
};

function App() {
  const [quotes, setQuotes] = useState(sampleQuotes);

  const getQuotes = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setQuotes(data[0]);
      });
  };

  return (
    <div className="App">
      <DisplayQuotes quotes={quotes} />
      <button type="button" onClick={getQuotes}>
        Get quotes
      </button>
    </div>
  );
}

export default App;
