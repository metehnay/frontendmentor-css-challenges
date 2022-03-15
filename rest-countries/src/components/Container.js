import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { useContext, MainContext } from "./Context";
import { Link } from "react-router-dom";

const Container = () => {
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [search, setSearch] = useState("");
  const { country, setCountry } = useContext(MainContext);

  const paginate = (pageNumber) => setPage(pageNumber);

  const indexOfLastPost = page * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const filtered = country.filter((count) => {
    if (search == "") {
      return count;
    } else if (
      count.region.toLowerCase().includes(search.toLocaleLowerCase())
    ) {
      return count;
    } else if (count.name.toLowerCase().includes(search.toLocaleLowerCase())) {
      return count;
    }
  });
  const currentPosts = filtered.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div className="container-fluid min-vh-100 customs">
        <div className="d-flex justify-content-between p-4 sa">
          <div className="form-control w-25 my-4 mx-4">
            <input
              type="text"
              placeholder="Search for a country..."
              className="border-0 inputs "
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="select my-4 mx-4">
            <select
              className="form-select border-0"
              aria-label="Default select example"
              onChange={(e) => setSearch(e.target.value)}
            >
              <option selected>Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>

        <div className="d-flex p-4 mx-auto flex-wrap">
          {currentPosts.map((coun) => (
            <>
              <Link to={`${coun.numericCode}`}>
                <div className="d-flex flex-column mx-4 card my-4">
                  <img src={coun.flag} className="imo" />
                  <h2 className="px-3 py-3">
                    {" "}
                    <span style={{ fontWeight: "700", fontSize: "21px" }}>
                      {coun.name}
                    </span>
                  </h2>
                  <p className="mx-3">
                    <span style={{ fontWeight: "600" }}>Population:</span>{" "}
                    {coun.population.toLocaleString()}
                  </p>
                  <p className="mx-3">
                    {" "}
                    <span style={{ fontWeight: "600" }}>Region:</span>{" "}
                    {coun.region}
                  </p>
                  <p className="mx-3">
                    {" "}
                    <span style={{ fontWeight: "600" }}>Capital:</span>{" "}
                    {coun.capital}{" "}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>
        <div className="mx-auto d-flex justify-content-center py-2">
          <Pagination
            postsPerPage={perPage}
            totalPosts={country.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default Container;
