import React from "react";
import Accordion from "./Accordion";
import Convert from "./Convert";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Translate from "./Translate";

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
  return (
    <div>
      <Search />
      <Accordion data={dataAccordion} />
      <Dropdown data={dataDropdown} label="Dropdown" />
      <Translate />
      <Convert />
    </div>
  );
};

export default App;
