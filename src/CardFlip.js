import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState();

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div
        style={{
          backgroundColor: "green",
          height: 100,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        This is the front of the card.
        <button onClick={handleClick}>Click to flip</button>
      </div>

      <div
        style={{
          backgroundColor: "blue",
          height: 100,
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        This is the back of the card.
        <button onClick={handleClick}>Click to flip</button>
      </div>
    </ReactCardFlip>
  );
};

export default CardFlip;
