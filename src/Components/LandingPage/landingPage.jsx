import React from "react";
import "./landingPage.css";
import logo from "../../assets/logo.png";
import { Button } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
import landingPage from "../../assets/landing.jpg";
import story1 from "../../assets/story1.jpeg";
const LandingPage = () => {
  return (
    <React.Fragment>
      <div id="landing-section">
        <div className="navbar-container">
          <div className="left-section">
            <img src={logo} alt=".." className="logo-img" />
          </div>
        </div>
        <div className="text-container">
          <h2>Sauveteurs du dunkerquois</h2>
          <p>
            Bienvenue sur le site des sauveteurs du dunkerquois. Ce site rend
            hommage aux femmes, hommes et enfants qui ont réalisé des actes de
            sauvetages en milieu aquatique. Ces sauveteurs, habitants du
            dunkerquois (de Bray-Dunes à Grand-Fort-Philippe), ont participé à
            plus de 900 sauvetages en mer et plus de 1100 sauvetages
            individuels. Œuvrant avec courage, abnégation et souvent au mépris
            du risque ils méritent amplement que leurs actes soient pérennisés.
          </p>
          <button type="button" className="btn btn-danger">
            Explorer
          </button>
        </div>

        <div className="button-container">
          <button id="history">
            <AiOutlineArrowDown size="1rem" />
            History
          </button>
        </div>
      </div>
      <br />

      <div className="story-section">
        <div className="story-container">
          <div className="content-story">
            <p>
              136 ans sauvetage de la goélette anglaise GOLDEN SHEAF 28 novembre
              1885 Equipage sauvé
            </p>
          </div>

          <div className="img-story">
            <img src={story1} alt="left" className="story-img" />
          </div>
        </div>

        <div className="story-container">
          <div className="img-story">
            <img src={landingPage} alt="left" className="story-img" />
          </div>
          <div className="content-story">
            <p>
              136 ans sauvetage de la goélette anglaise GOLDEN SHEAF 28 novembre
              1885 Equipage sauvé
            </p>
          </div>
        </div>

        <div className="story-container">
          <div className="content-story">
            <p>
              Sauvetage du PALMA 28 décembre 1900 <br />5 hommes sauvés
            </p>
          </div>
          <div className="img-story">
            <img src={story1} alt="left" className="story-img" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
