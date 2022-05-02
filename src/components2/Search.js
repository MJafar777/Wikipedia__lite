import React, { useState } from "react";
import logo from "./images/logo1.png";
import functions from "./images/functions.png";
import profile from "./images/profileImg.jpg";
import "../components2/Design.css";
const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => setSearchTerm(event.target.value);

  const keyPress = (event) => {
    if (event.key === "Enter") {
      props.onSubmit(searchTerm);
    }
  };

  return (
    <>
      <div className="header">
        <a href="//" className="brand">
          <img src={logo} alt="logo" className="logoBrand" />
        </a>
        <input
          type="text"
          // fullWidth
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          onKeyPress={keyPress}
        />
        <div className="icons">
          <img src={functions} alt="functions" className="functions" />
          <a href="//" className="profile">
            <img src={profile} alt="profile" className="profile" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Search;
