import "./App.css";
import dot from "./images/icon-ellipsis.svg";
import img from "./images/image-jeremy.png";
import React, { useState, useEffect } from "react";
import { data } from "./data";

function App() {
  const [daily, setDaily] = useState(true);
  const [weekly, setWeekly] = useState(false);
  const [monthly, setMonthly] = useState(false);
  const [db, setDb] = useState(data);

  useEffect(() => {
    console.log(db);
  }, []);
  return (
    <>
      <div className="container">
        <div className="container-md">
          <div className="sidebar">
            <div className="card">
              <div className="card-inline">
                <img src={img} className="jeremy" />
                <div className="insideo">
                  <p>Report for</p>
                  <h2>Jeremy</h2>
                  <h2>Robson</h2>
                </div>
              </div>
              <div className="card-bottom">
                <h4
                  onClick={() => (
                    setDaily(true), setWeekly(false), setMonthly(false)
                  )}
                  className={daily && "active"}
                >
                  Daily
                </h4>
                <h4
                  onClick={() => (
                    setDaily(false), setMonthly(false), setWeekly(true)
                  )}
                  className={weekly && "active"}
                >
                  Weekly
                </h4>
                <h4
                  onClick={() => (
                    setWeekly(false), setDaily(false), setMonthly(true)
                  )}
                  className={monthly && "active"}
                >
                  Monthly
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="card-items">
          <div className="items">
            {db.map((dat) => (
              <>
                <div className={`single ${dat.class}`}>
                  <header>
                    <img src={dat.image} className="pick" />
                  </header>
                  <div className="flexo">
                    <h3>{dat.title}</h3>
                    <img src={dot} className="dot" />
                  </div>
                  <h4>
                    {daily && `${dat.timeframes.daily.current}`}
                    {weekly && `${dat.timeframes.weekly.current}`}
                    {monthly && `${dat.timeframes.monthly.current}`}
                    hrs
                  </h4>
                  <p>
                    Last Week - {daily && `${dat.timeframes.daily.previous}`}
                    {weekly && `${dat.timeframes.weekly.previous}`}
                    {monthly && `${dat.timeframes.monthly.previous}`}hrs
                  </p>
                </div>
              </>
            ))}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
