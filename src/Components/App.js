import axios from "axios";
import React, { useState, useEffect } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";

const dataAccordion = [
  { savol: "qalay", javob: "zur1" },
  { savol: "qalay", javob: "zur2" },
  { savol: "qalay", javob: "zur3" },
  { savol: "qalay", javob: "zur4" },
];

const dataDropdown = [
  { label: "The Color Red", value: "red" },
  { label: "The Color green", value: "green" },
  { label: "The Color blue", value: "blue" },
];

const App = () => {
  
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const changeTerm = (e) => {
    setTerm(e.target.value);
  };

  const getData = async () => {
    const data = await axios.get("http://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        format: "json",
        origin: "*",
        srsearch: term,
      },
    });
    setResults(data.data.query.search);
  };
  return (
    <div>
      <Search />
      {/* <Accordion data={dataAccordion} /> */}
      {/* <Dropdown data={dataDropdown} /> */}
    </div>
  );
};

export default App;
