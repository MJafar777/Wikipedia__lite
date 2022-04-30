import React, { useState } from "react";

const Accordion = (props) => {
  const [index, setIndex] = useState("");
  const dataRender = () => {
    return props.data.map((val, key) => {
      return (
        <div key={key}>
          <div onClick={() => setIndex(key)} className="ui styled accordion">
            <div className={`title ${index === key ? "active" : ""}`}>
              <i className="dropdown icon"></i>
              {val.savol}
            </div>
            <div className={`content ${index === key ? "active" : ""}`}>
              <p
                className="transition visible"
                style={{ display: "block !important" }}
              >
                {val.javob}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return <div>{dataRender()}</div>;
};

export default Accordion;
