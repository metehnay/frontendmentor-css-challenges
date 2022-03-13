import "./App.css";
import React, { useState, useEffect } from "react";
import bg from "./images/bg-pattern-desktop.svg";
import bg1 from "./images/illustration-box-desktop.svg";
import bg2 from "./images/illustration-woman-online-desktop.svg";
import { data } from "./data";
import Faq from "./Faq";

function App() {
  const [db, setDb] = useState(data);
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(-1);
  useEffect(() => {
    console.log(db);
  }, []);

  return (
    <>
      <div className="container">
        <div className="container-md">
          <div className="faq">
            <img src={bg} className="bg" />
            <img src={bg1} className="bg1" />
            <img src={bg2} className="bg2" />
            <div className="card">
              <h1>FAQ</h1>
              <div className="info">
                {db.map((dat, index) => (
                  <Faq
                    toggle={index === toggle}
                    setToggle={() => setToggle(index)}
                    open={open}
                    setOpen={setOpen}
                    title={dat.title}
                    desc={dat.desc}
                    key={dat.id}
                    id={dat.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
