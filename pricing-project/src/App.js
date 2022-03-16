import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import icon from "./images/icon-check.svg";
const App = () => {
  const values = ["12", "16", "24", "36"];
  const [val, setVal] = useState("2");
  const [dollar, setDollar] = useState("");
  const [yearly, setYearly] = useState(false);
  const [page, setPage] = useState("");
  const [klas, setKlas] = useState("val3");

  const handleChange = (e) => {
    setVal(e.target.value);
  };

  const toggle = () => {
    if (yearly === true) {
      setYearly(false);
    }
    if (yearly === false) {
      setYearly(true);
    }
  };

  useEffect(() => {
    if (val === "0") {
      setDollar(parseInt(yearly ? 8 * 0.75 : 8));
      setPage("10K");
      setKlas("val1");
    }
    if (val === "1") {
      setDollar(parseInt(yearly ? values[0] * 0.75 : values[0]));
      setPage("50K");
      setKlas("val2");
    }
    if (val === "2") {
      setDollar(parseInt(yearly ? values[1] * 0.75 : values[1]));
      setPage("100K");
      setKlas("val3");
    }
    if (val === "3") {
      setDollar(parseInt(yearly ? values[2] * 0.75 : values[2]));
      setPage("500K");
      setKlas("val4");
    }
    if (val === "4") {
      setDollar(parseInt(yearly ? values[3] * 0.75 : values[3]));
      setPage("1M");
      setKlas("val5");
    }
  }, [val, yearly]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="container-h">
            <h4>Simple, traffic-based pricing</h4>
            <p>Sign-up for our 30-day trial. No credit card required.</p>
          </div>
          <div className="container-md">
            <div className="top">
              <p>{page} PAGEVIEWS</p>
              <div className="lo">
                <h2>${dollar}</h2>
                <p
                  style={{
                    fontSize: "13px",
                    fontWeight: "500",
                    opacity: "0.8",
                  }}
                >
                  / month
                </p>
              </div>
            </div>
            <div className="middle">
              <input
                type="range"
                min="0"
                max="4"
                value={val}
                id="slider"
                className={klas}
                onChange={handleChange}
              />
            </div>
            <div className="billing">
              <p>Monthly Billing</p>

              <label className="switch">
                <input
                  type="checkbox"
                  name="billing"
                  id="billing"
                  onClick={toggle}
                />
                <span className="toggle-slider" id={yearly && "tom"}></span>
              </label>
              <p>Yearly Billing</p>
              <p className="discount">25% discount</p>
            </div>
            <div className="border"></div>
            <div className="footer">
              <ul className="ul">
                <li>
                  <img src={icon} id="ikon" />
                  Unlimited websites
                </li>
                <li>
                  {" "}
                  <img src={icon} id="ikon" />
                  100% data ownership
                </li>
                <li>
                  {" "}
                  <img src={icon} id="ikon" />
                  Email reports
                </li>
              </ul>
              <div className="button">
                <button className="btn">Start my trial</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
