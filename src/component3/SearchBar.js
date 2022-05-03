import React, { useState } from "react";

const SearchBar = (props) => {
  const [kalitSuz, setKalitSuz] = useState({ kalitSoz: "" });
  const func = (event) => {
    event.preventDefault();
    setKalitSuz({ kalitSoz: event.target.value });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
    props.malumotniOl(kalitSuz.kalitSoz);
  };
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <form onSubmit={onFormSubmit} className="ui search">
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            onChange={func}
            className="prompt"
            type="text"
            placeholder="Search images..."
          />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
