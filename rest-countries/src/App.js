import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Container from "./components/Container";
import SinglePage from "./components/SinglePage";
import { MainContext } from "./components/Context";
import React, { useState, useEffect } from "react";

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const resp = await response.json();
      const data = (setCountry(resp), console.log(resp));
    };

    fetchData();
  }, []);

  const data = {
    country,
    setCountry,
  };
  return (
    <>
      <MainContext.Provider value={data}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Container />} />
            <Route exact path="/:numericCode" element={<SinglePage />} />
          </Routes>
        </Router>
      </MainContext.Provider>
    </>
  );
}

export default App;
