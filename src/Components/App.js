import React from "react";
import Accordion from "./Accordion";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Translate from "./Translate";
import "./style.css";

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
const fackFunc = (a) => {
  console.log(a);
};
const router = () => {
  if (window.location.pathname === "/") {
    return <Accordion data={dataAccordion} />;
  }
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }
  if (window.location.pathname === "/dropdown") {
    return <Dropdown getData={fackFunc} data={dataDropdown} label="Dropdown" />;
  }
  if (window.location.pathname === "/search") {
    return <Search />;
  }
};
const App = () => {
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
      </div>
      <div>{router()}</div>
    </div>
  );
};

export default App;
