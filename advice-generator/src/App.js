import "./App.css";
import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import React, { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState([]);
  const getData = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((resp) => resp.json())
      .then((log) => (setAdvice(log.slip), console.log(log)));
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="container-md">
          <div className="card">
            <p className="neo">ADVICE #{advice.id}</p>
            <h2>{advice.advice}</h2>
            <img src={divider} className="divider" />
          </div>
          <div className="dice-background">
            <img src={dice} className="dice" onClick={getData} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
