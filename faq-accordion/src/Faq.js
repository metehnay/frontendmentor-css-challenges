import React from "react";
import arrow from "./images/icon-arrow-down.svg";

const Faq = ({ toggle, setToggle, title, desc, id, open, setOpen }) => {
  return (
    <>
      {" "}
      <div
        className="question"
        onClick={() => (setToggle(!toggle), setOpen(!open))}
      >
        <p className={open & toggle ? "tot" : "no"}>{title}</p>

        <img src={arrow} className={open && toggle ? "ikon aktif" : "ikon"} />
      </div>
      <p className="answer border">{open && toggle ? <>{desc}</> : ""}</p>
    </>
  );
};

export default Faq;
