import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useContext, MainContext } from "./Context";
import { BiArrowBack } from "react-icons/bi";

const SinglePage = () => {
  const { numericCode } = useParams();
  const { country, setCountry } = useContext(MainContext);

  return (
    <>
      <div className="container-fluid">
        <Link to="/">
          <button className="btn btn-danger m-5 d-flex px-4">
            <BiArrowBack style={{ height: "24px", width: "35px" }} />
            <span style={{ marginLeft: "0rem" }}>Back</span>
          </button>
        </Link>
        <div className="container-fluid py-4 px-4 mx-4 d-flex">
          {country
            .filter((card) => card.numericCode === numericCode)
            .map((card, index) => (
              <>
                <img src={card.flag} className="imos" />
                <div className="cardo">
                  <h2 className="px-4 m-4" style={{ fontWeight: "700" }}>
                    {card.name}
                  </h2>
                  <div className="card-container px-4 mx-4">
                    <div className="tom d-flex">
                      <div className="colum">
                        <h5>
                          Native Name: <span>{card.nativeName}</span>
                        </h5>
                        <h5>
                          Population:{" "}
                          <span>{card.population.toLocaleString()}</span>
                        </h5>
                        <h5>
                          Region: <span>{card.region}</span>
                        </h5>
                        <h5>
                          Sub Region: <span>{card.subregion}</span>
                        </h5>
                        <h5>
                          Capital: <span>{card.capital}</span>
                        </h5>
                      </div>
                    </div>
                    <div className="right px-4 mx-4">
                      <h5>
                        Top Level Domain: <span>{card.topLevelDomain}</span>
                      </h5>
                      <h5>
                        Currencies: <span>{card.currencies[0].code}</span>
                      </h5>
                      <h5>
                        Languages: <span>{card.languages[0].name}</span>
                      </h5>
                    </div>{" "}
                  </div>{" "}
                  <h3
                    className="mx-4 px-4 py-4 zoo"
                    style={{ fontWeight: "700", fontSize: "17px" }}
                  >
                    Border Countries:
                    <div className="borderx d-flex flex-row mx-4">
                      {card.borders ? (
                        <>
                          {card.borders.map((border) => (
                            <div className="bor d-flex">{border}</div>
                          ))}
                        </>
                      ) : (
                        <p>None</p>
                      )}{" "}
                    </div>
                  </h3>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default SinglePage;
