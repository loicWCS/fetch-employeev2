import React from "react";

function DisplayQuotes({ quotes }) {
  return (
    quotes && (
      <div className="DisplayQuotes">
        <img src={quotes.image} alt={quotes.image} />
        <ul>
          <li>quote: {quotes.quote}</li>
          <li>character: {quotes.character}</li>
          <li>characterDirection: {quotes.characterDirection}</li>
        </ul>
      </div>
    )
  );
}

export default DisplayQuotes;
