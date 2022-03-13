import "./App.css";
import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import React, { useState, useEffect } from "react";

function App() {
  const [advice, setAdvice] = useState([]);
  const [loading, setLoading] = useState(false);
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
            <h2>
              {loading
                ? `${advice.advice}`
                : `
                  "It is easy to sit up and take notice, what's difficult is
                  getting up and taking action."
                  `}
            </h2>
            <img src={divider} className="divider" />
          </div>
          <div className="dice-background">
            <img
              src={dice}
              className="dice"
              onClick={() => (getData(), setLoading(true))}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
