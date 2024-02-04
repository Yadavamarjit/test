// Card.js
import React, { useEffect, useState } from "react";
// import "./Card.css";

export default function Card({ data, b1, setb1, setn, n }) {
  const [isTransitioned, setIsTransitioned] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTransitioned(true);
    }, 50);

    return () => clearTimeout(timeout);
  }, []);

  const getRandomColorClass = () => {
    const colors = [
      "background-color-1",
      "background-color-2",
      "background-color-3",
    ];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div
      className={`card-container background-color-1 ${
        isTransitioned ? "transitioned" : ""
      }`}
    >
      {" "}
      <div className="card-content">
        {!n ? (
          <>
            <p>Dear Simran,</p>
            <p>
              Happy Birthday! Wishing you a day filled with joy and
              unforgettable moments. Your presence brings warmth and happiness
              to our lives. Thank you for being a source of positivity and
              kindness. Grateful for the shared smiles and laughter. May the
              coming year be as wonderful as you are.
            </p>
            <p>
              With heartfelt thanks,
              <br />
              Yadav Amarjit
            </p>

            <button onClick={() => setn(true)}>Next</button>
          </>
        ) : (
          <>
            <h4>
              With lots of efforts I have finally developed image to sketch app
              for you.
            </h4>
            <button onClick={() => setb1(false)}>Try Now</button>
          </>
        )}
      </div>
      <div className="hr"></div>
    </div>
  );
}
