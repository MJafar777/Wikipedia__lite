import React from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Translate from "./Translate";
import "./style.css";
import "../components2/Design.css";
import Weather from "./Weather";
import Header from "./Header";
import Youtube from "./Youtube";

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
  if (window.location.pathname === "/youtube") {
    return <Youtube />;
  }
  if (window.location.pathname === "/unsplash") {
    return <Weather />;
  }
};
const App = () => {
  return (
    <div>
      <Header />  
      <div>{router()}</div>
    </div>
  );
};

export default App;
