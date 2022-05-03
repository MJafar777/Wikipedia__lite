import React from "react";

const Header = () => {
  return (
    <div>
      <div className="ui secondary  menu">
        <a href="/" id="Accordion" className=" item">
          Accordion
        </a>
        <a href="/translate" id="translate" className="item">
          translate
        </a>
        <a href="/dropdown" id="dropdown" className="item">
          dropdown
        </a>
        <a href="/search" id="search" className="item">
          search
        </a>
        <a href="/youtube" id="youtube" className="item">
          youtube
        </a>
        <a href="/weather" id="weather" className="item">
          weather
        </a>
        <a href="/unsplash" id="unsplash" className="item">
          unsplash
        </a>
      </div>
    </div>
  );
};

export default Header;
