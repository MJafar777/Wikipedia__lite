import axios from "axios";
import React, { useState, useEffect } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const dataDropdown = [
  { label: "uzbek", value: "uz" },
  { label: "English", value: "en" },
  { label: "Russion", value: "ru" },
  { label: "Arabik", value: "ar" },
];

const Translate = () => {
  const [term, setTerm] = useState("");
  const [translate, setTranslate] = useState("");
  const [result, setresult] = useState("");
  const getInputData = (e) => {
    setTerm(e.target.value);
  };

  const getData = (data) => {
    setTranslate(data);
  };

  useEffect(() => {
    const getData = async () => {
      const data = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: term,
            target: translate,
            format: "text",
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setresult(data.data.data.translations[0].translatedText);
    };
    const timer = setTimeout(() => {
      if (term) {
        getData();
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [term, translate]);


  return (
    <div className="ui container">
      <h1 className="DropDownTxt">Translate App</h1>
      <form className="ui form">
        <div className="ui input focus" style={{ width: "60%" }}>
          <input
          className="inputTran"
            onChange={getInputData}
            type="text"
            placeholder="Enter Text..."
          />
        </div>
      </form>
      <Dropdown getData={getData} data={dataDropdown} label="Translate to" />
      <h1>Output</h1>
      <Convert result={result}/>
      
    </div>
  );
};

export default Translate;
